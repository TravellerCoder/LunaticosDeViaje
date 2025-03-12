<?php
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$formcontent="
    Datos de Contacto: \n
    Nombre: $nombre \n
    Email: $email \n
    Mensaje: $mensaje \n
";

$recipient = "lunaticosdeviaje11.11@gmail.com";

$subject = "Consulta de formulario de $nombre";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>