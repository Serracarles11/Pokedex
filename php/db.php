<?php
header('Content-Type: application/json');

$host = "localhost";
$user = "Ash";
$password = "Carlesserra10";
$database = "Pokedex_Carles";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    echo json_encode(["error" => "Error de conexión: " . $conn->connect_error]);
    exit;
}

// Recoger el ID de la URL
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Consulta para obtener la imagen del Pokémon
$sql = "SELECT imagen FROM Pokemon WHERE id = $id";
$result = $conn->query($sql);

if ($result && $row = $result->fetch_assoc()) {
    echo json_encode(["imagen" => $row['imagen']]);
} else {
    echo json_encode(["error" => "No se encontró el Pokémon"]);
}

$conn->close();
?>




