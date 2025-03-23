<?php
// reCAPTCHA
$secret = '6Ld1tPcqAAAAAN__73qVky8cJInst8z1ZYLp-5wG';
$response = $_POST['g-recaptcha-response'];
$remoteip = $_SERVER['REMOTE_ADDR'];

$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}&remoteip={$remoteip}");
$captcha_success = json_decode($verify);

if (!$captcha_success->success) {
    echo 'error_captcha';
    exit;
}

// Datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Contenido del correo
$formcontent = "
    Datos de Contacto: \n
    Nombre: $nombre \n
    Email: $email \n
    Mensaje: $mensaje \n
";

// Destinatario y asunto
$recipient = "guillermobukowski@gmail.com";
$subject = "Consulta de formulario de $nombre";

// Encabezado del correo
$header = "From: $email\r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";

// Enviar correo
if (mail($recipient, $subject, $formcontent, $header)) {
    echo 'success';
} else {
    echo 'error';
}