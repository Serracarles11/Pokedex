<?php
header('Content-Type: application/json; charset=utf-8');
require 'db.php'; // Conexión a la base de datos

// Llamar al procedimiento almacenado
$sql = "CALL BuscarPokemonPorTipo()"; // Aquí llamamos al procedimiento

$result = $conn->query($sql); // Ejecutamos la consulta

$datos = []; // Arreglo para almacenar los resultados

if ($result && $result->num_rows > 0) {
    while ($fila = $result->fetch_assoc()) {
        $datos[] = $fila; // Almacenamos los datos
    }
}

// Devolvemos los datos como JSON
echo json_encode($datos, JSON_UNESCAPED_UNICODE);

// Cerramos la conexión
$conn->close();
?>