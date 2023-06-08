<?php
	
	$nombre = $_POST['nombre'];
	$direccion = $_POST['direccion'];
	$localidad = $_POST['localidad'];
	$provincia = $_POST['provincia'];
    $email = $_POST['email'];
	$telefono = $_POST['telefono'];	
	$comentarios = $_POST['comentarios'];	
	
	$destinatario = "info@industriasobertec.com.ar";
	
	$asunto = "Mail desde www.obertec.com.ar";
	
	$cuerpo = "Nombre y Apellido: $nombre. <br />Dirección: $direccion, $localidad, $provincia. <br /> Dirección de e-mail: $email. <br>Nro. de teléfono: $telefono.<br>Su consulta es: $comentarios .";
	
    $cabeceras = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $cabeceras .= 'From: info@industriasobertec.com.ar <info@industriasobertec.com.ar>'."\r\n";
	
	mail($email, "Gracias por su consulta.", "Le contestaremos a la brevedad", $cabeceras);
	
	mail($destinatario, $asunto, $cuerpo, $cabeceras);
	
	echo "Mensaje enviado.";
	
	header ("location: gracias.php");

?>