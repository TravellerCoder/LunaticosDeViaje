<?php
$secret = '6LftLvcqAAAAAIw7rF9h-xqT8teBJqcbSQ5WqEIG';
$response = $_POST['g-recaptcha-response'];
$remoteip = $_SERVER['REMOTE_ADDR'];

$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}&remoteip={$remoteip}");
$captcha_success = json_decode($verify);

    if 
        ($captcha_success->success == false){;
        echo "Eres un robot";
    } else if 
        ($captcha_success->success == true){;
        $nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$formcontent="
    Datos de Contacto: \n
    Nombre: $nombre \n
    Email: $email \n
    Mensaje: $mensaje \n
";

$recipient = "guillermobukowski@gmail.com";

$subject = "Consulta de formulario de $nombre";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: /index");
    }
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$formcontent="
    Datos de Contacto: \n
    Nombre: $nombre \n
    Email: $email \n
    Mensaje: $mensaje \n
";

$recipient = "guillermobukowski@gmail.com";

$subject = "Consulta de formulario de $nombre";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: /index");
?>