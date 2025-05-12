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

$nombre2 = isset($_GET['nombre2']) ? $conn->real_escape_string($_GET['nombre2']) : '';

// Consulta exacta: nombre debe coincidir con "pokemon-gigantamax"
$sql = "SELECT * FROM FormasEspeciales WHERE nombre LIKE CONCAT('%', ?, '%')";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $nombre2);
$stmt->execute();
$result = $stmt->get_result();

$pokemons = [];
while ($row = $result->fetch_assoc()) {
    $pokemons[] = [
        "imagen" => $row['imagen'],
        "tipo"   => $row['tipo'],
        "nombre" => $row['nombre']
    ];
}

if (!empty($pokemons)) {
    echo json_encode($pokemons);
} else {
    // Mantenemos estructura consistente para el cliente
    echo json_encode([]);
}

$conn->close();
?>


