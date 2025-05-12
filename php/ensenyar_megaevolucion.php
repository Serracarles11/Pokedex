<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");  // Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");  // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type");  // Permitir el encabezado Content-Type

$host = "localhost";
$user = "Ash";
$password = "Carlesserra10";
$database = "Pokedex_Carles";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    echo json_encode(["error" => "Error de conexión: " . $conn->connect_error]);
    exit;
}

$tipo = isset($_GET['nombre']) ? $_GET['nombre'] : '';

// Realizar la consulta para obtener los nombres de los Pokémon con el tipo dado
$sql = "SELECT imagen,tipo,imagen FROM FormasEspeciales WHERE nombre like CONCAT('%', ?,+'-mega', '%');";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $tipo);
$stmt->execute();
$result = $stmt->get_result();

// Array para almacenar los Pokémon
$pokemons = [];

while ($row = $result->fetch_assoc()) {
    $pokemons[] = [
        "imagen" => $row['imagen'],
        "tipo" => $row['tipo'],
        "nombre" => $row['nombre']
    ];
}

if (!empty($pokemons)) {
    echo json_encode($pokemons);  // Devuelve todos los Pokémon de ese tipo
} else {
    echo json_encode(["error" => "No se encontró el Pokémon"]);
}

$conn->close();
?>
