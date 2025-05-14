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

// Recoger el tipo de Pokémon desde la URL (por ejemplo, ?tipo=agua)
$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

// Realizar la consulta para obtener los detalles completos del Pokémon
$sql = "
    SELECT 
        imagen, tipo, nombre, id, descripcion,
        hp, ataque_e, ataque_f, defensa_e, defensa_f, velocidad, altura, peso, 
        generacion, genero, grito, legendario, mitico, tipo_secundario 
    FROM Pokemon 
    WHERE tipo LIKE CONCAT('%', ?, '%')";
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
        "nombre" => $row['nombre'],
        "id" => $row['id'],
        "descripcion" => $row['descripcion'],
        "hp" => $row['hp'],
        "ataque_e" => $row['ataque_e'],
        "ataque_f" => $row['ataque_f'],
        "defensa_e" => $row['defensa_e'],
        "defensa_f" => $row['defensa_f'],
        "velocidad" => $row['velocidad'],
        "altura" => $row['altura'],
        "peso" => $row['peso'],
        "generacion" => $row['generacion'],
        "genero" => $row['genero'],
        "grito" => $row['grito'],
        "legendario" => $row['legendario'],
        "mitico" => $row['mitico'],
        "tipo_secundario" => $row['tipo_secundario']
    ];
}

if (!empty($pokemons)) {
    echo json_encode($pokemons);  // Devuelve todos los Pokémon de ese tipo con sus estadísticas
} else {
    echo json_encode(["error" => "No se encontró el Pokémon"]);
}

$conn->close();
?>





