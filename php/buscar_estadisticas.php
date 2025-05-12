<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");  // Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");  // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type");  // Permitir el encabezado Content-Type

// Configuración de la conexión a la base de datos
$host = "localhost";
$user = "Ash";
$password = "Carlesserra10";
$database = "Pokedex_Carles";

// Conexión a la base de datos
$conn = new mysqli($host, $user, $password, $database);

// Verificar si la conexión ha tenido éxito
if ($conn->connect_error) {
    echo json_encode(["error" => "Error de conexión: " . $conn->connect_error]);
    exit;
}

// Obtener el valor 'nombre2' desde la solicitud GET
$nombre2 = isset($_GET['nombre2']) ? $_GET['nombre2'] : '';

// Verificar si se proporcionó el valor 'nombre2'
if ($nombre2 === '') {
    echo json_encode(["error" => "No se proporcionó un valor para 'nombre2'"]);
    exit;
}

// Consulta SQL para obtener los Pokémon cuyo nombre coincida con el valor de 'nombre2'
$sql = "SELECT nombre, ataque_f, ataque_e, defensa_f, defensa_e, velocidad, hp
        FROM Pokemon
        WHERE nombre LIKE CONCAT('%', ?, '%')";

// Preparar la consulta
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $nombre2);  // Asociamos 'nombre2' con el parámetro de la consulta
$stmt->execute();

// Obtener el resultado de la consulta
$result = $stmt->get_result();

// Array para almacenar los Pokémon encontrados
$pokemons = [];

// Recorrer los resultados y agregarlos al array
while ($row = $result->fetch_assoc()) {
    $pokemons[] = [
        "nombre" => $row['nombre'],
        "ataque_f" => $row['ataque_f'],
        "ataque_e" => $row['ataque_e'],
        "defensa_f" => $row['defensa_f'],
        "defensa_e" => $row['defensa_e'],
        "velocidad" => $row['velocidad'],
        "hp" => $row['hp']
    ];
}

// Si se encontraron Pokémon, devolverlos en formato JSON
if (!empty($pokemons)) {
    echo json_encode($pokemons);
} else {
    echo json_encode(["error" => "No se encontraron Pokémon con ese nombre"]);
}

// Cerrar la conexión
$conn->close();
?>
