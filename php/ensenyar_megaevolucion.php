<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$user = "Ash";
$password = "Carlesserra10";
$database = "Pokedex_Carles";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    echo json_encode(["error" => "Error de conexión: " . $conn->connect_error]);
    exit;
}

$nombre = isset($_GET['nombre']) ? $_GET['nombre'] : '';

$sql = "SELECT nombre, imagen, tipo, id FROM FormasEspeciales WHERE nombre = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $nombre);
$stmt->execute();
$result = $stmt->get_result();

$pokemons = [];

while ($row = $result->fetch_assoc()) {
    $pokemons[] = [
        "nombre" => $row['nombre'],
        "imagen" => $row['imagen'],
        "tipo" => $row['tipo'],
        "id" => $row['id']
    ];
}

if (!empty($pokemons)) {
    echo json_encode($pokemons);
} else {
    echo json_encode([]);
}

$conn->close();
?>