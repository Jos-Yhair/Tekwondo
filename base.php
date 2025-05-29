<?php

$con = mysqli_connect('localhost', 'root', '', 'proykara') or die('Error en la conexión con el servidor local');


$nombre = mysqli_real_escape_string($con, $_POST["nombre"]);
$telefono = mysqli_real_escape_string($con, $_POST["telefono"]);
$etapa = mysqli_real_escape_string($con, $_POST["etapa"]);
$edad = mysqli_real_escape_string($con, $_POST["edad"]);
$opinion = mysqli_real_escape_string($con, $_POST["opinion"]);
$duda = mysqli_real_escape_string($con, $_POST["duda"]);


$sql = "INSERT INTO cont2 (id, nombre, telefono, etapa, edad, opinion, duda) 
        VALUES (null, '$nombre', '$telefono', '$etapa', '$edad', '$opinion', '$duda')";

$resultado = mysqli_query($con, $sql) or die("Error en el query database");

mysqli_close($con);

header("Location: ../index.html");
exit();
?>
