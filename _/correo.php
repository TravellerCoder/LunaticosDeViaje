<?php

$empresa = $_POST['empresa'];
$servicio1 = $_POST['Paid-Media'];
$servicio2 = $_POST['Branding'];
$servicio3 = $_POST['Analitica-digital'];
$servicio4 = $_POST['Desarrollo-Web'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$empleados = $_POST['empleados'];

$formcontent="
    Datos de Contacto: \n
    Empresa: $empresa \n
    Servicio 1: $servicio1 \n
    Servicio 2: $servicio2 \n
    Servicio 3: $servicio3 \n
    Servicio 4: $servicio4 \n
    Nombre: $nombre \n
    Telefono: $telefono \n
    Email: $email \n
    Cantidad de Empleados: $empleados \n
";

$recipient = "ventas@freelads.com.ar";

$subject = "Consulta de formulario de $empresa";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: form-ok.html");

?>