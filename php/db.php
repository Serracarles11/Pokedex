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

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

$sql = "SELECT 
            id,
            nombre,
            tipo,
            tipo_secundario,
            imagen,
            imagen_shiny,
            descripcion,
            altura,
            peso,
            hp,
            ataque_e,
            ataque_f,
            defensa_e,
            defensa_f,
            velocidad,
            genero,
            generacion,
            legendario,
            mitico,
            grito
        FROM Pokemon 
        WHERE id = $id";

$result = $conn->query($sql);

if ($result && $row = $result->fetch_assoc()) {
    echo json_encode([
        "id" => $row['id'],
        "nombre" => $row['nombre'],
        "tipo" => $row['tipo'],
        "tipo_secundario" => $row['tipo_secundario'],
        "imagen" => $row['imagen'],
        "imagen_shiny" => $row['imagen_shiny'],
        "descripcion" => $row['descripcion'],
        "altura" => (float)$row['altura'],
        "peso" => (float)$row['peso'],
        "hp" => (int)$row['hp'],
        "ataque_e" => (int)$row['ataque_e'],
        "ataque_f" => (int)$row['ataque_f'],
        "defensa_e" => (int)$row['defensa_e'],
        "defensa_f" => (int)$row['defensa_f'],
        "velocidad" => (int)$row['velocidad'],
        "genero" => (int)$row['genero'],
        "generacion" => (int)$row['generacion'],
        "legendario" => (bool)$row['legendario'],
        "mitico" => (bool)$row['mitico'],
        "grito" => $row['grito']
    ]);
} else {
    echo json_encode(["error" => "No se encontró el Pokémon"]);
}

$conn->close();
?>




