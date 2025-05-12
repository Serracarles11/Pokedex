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

// Comprobar si se ha recibido un valor en el input
$nombre2 = isset($_POST['nombre2']) ? $_POST['nombre2'] : '';

if ($nombre2 === '') {
    echo json_encode(["error" => "No se proporcionó ningún valor para la búsqueda"]);
    exit;
}

// Realizar la consulta para obtener los Pokémon cuyo nombre contenga el valor proporcionado
$sql = "SELECT nombre, imagen, tipo FROM Pokemon WHERE nombre LIKE CONCAT('%', ?, '%')";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $nombre2);
$stmt->execute();
$result = $stmt->get_result();

// Array para almacenar los Pokémon encontrados
$pokemons = [];

while ($row = $result->fetch_assoc()) {
    $pokemons[] = [
        "nombre" => $row['nombre'],
        "imagen" => $row['imagen'],
        "tipo" => $row['tipo']
    ];
}

if (!empty($pokemons)) {
    echo json_encode($pokemons);  // Devuelve los Pokémon cuyo nombre contiene el valor buscado
} else {
    echo json_encode(["error" => "No se encontraron Pokémon con ese nombre"]);
}

$conn->close();
?>
