<!DOCTYPE html>
<html lang="es">
	
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="Contáctese con nosotros para información de los productos y la empresa Industrias Obertec Argentina. Por WhatsApp, teléfono o email.">
<meta name="author" content="Granpez Publicidad">
<meta name="robots" content="INDEX,FOLLOW">
<meta name="keywords" content="obertec argentina, representantes obertec, vender obertec, contactar a obertec"/>	
<link rel="icon" href="img/favicon.png">

<title>Contáctese con Obertec | WhatsApp: +54911 5154-6349 Tel: +5411 4293-4813</title>

<!-- Bootstrap core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />

<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<script src="js/ie-emulation-modes-warning.js"></script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<link href="css/main.css" rel="stylesheet">
<link href="css/carousel.css" rel="stylesheet">
	
<script src="js/modernizr.js"></script>
	
</head>

<body>
<?php include_once("analyticstracking.php") ?>
<?php
	require_once("header.php");
?>
		<div class="col-md-7">
			<div id="navbar" class="navbar-collapse collapse">
			  <ul class="nav navbar-nav text-right">
				<li><a href="index.php">INICIO</a></li>
				<li class="dropdown"><a href="" class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >OBERTEC <span class="caret"></span></a>
				  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li><a href="nosotros.php">NOSOTROS</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="fabricacion.php">FABRICACIÓN E IMPORTACIÓN</a></li>
				  </ul>
				</li>
				<li><a href="negatoscopios.php">EQUIPOS</a></li>
  				<li><a href="distribuidores.php">DISTRIBUIDORES</a></li>
				<li class="active"><a href="contacto.php">CONTACTO</a></li>              
			  </ul>
			</div>
		</div>
		<div class="col-md-1">
		</div>
	  </nav>
	</div> 
</header>  
<?php
	require_once("slider.php");
?>
<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12 text-left">
				<h1 class="title-section"> Contáctese con nosotros</h1>
				<h2 class="bajada">Para consultar sobre  nuestros equipos o sobre el distribuidor más cercano a su localidad por favor enviénos sus inquietudes 
completando el siguiente formulario: </h2>
			</div>			
		</div>
		<br><br>
		<div class="row">
		<form action="enviar.php" method="post" id="contact-form" onSubmit="MM_validateForm('nombre','','R','asunto','','R','email','','RisEmail','comentarios','','R');return document.MM_returnValue">
			<div class="col-md-6">
				<label>Nombre y Apellido*</label>
				<input name="nombre" type="text" class="form-control" id="nombre" required />
			</div>
			<div class="col-md-6">
				<label>Dirección*</label>                                
				<input name="direccion" type="text" class="form-control" id="direccion" required />
			</div>
			<div class="col-md-6">
				<label>Localidad </label>
				<input name="localidad" type="text" class="form-control" id="localidad" />
            </div>
			<div class="col-md-6">
				<label>Provincia </label>
				<input name="provincia" type="text" class="form-control" id="provincia"  />
            </div>
            <div class="col-md-6">
				<label>Teléfono*</label>
				<input name="numerotel" type="text" class="form-control" id="numerotel" required />
			</div>
			<div class="col-md-6">	
				<label>E-mail*</label>
				<input name="email" type="text" id="email" class="form-control" required />
            </div>		
			<div class="col-md-12">
               <label>Comentario</label>
				<textarea name="comentarios" id="comentarios" class="form-control" required></textarea>
				<br><br>
				<button type="submit" class="button blue-btn">ENVIAR</button>
				<button type="reset" class="button grey-btn">BORRAR</button>
				<span>Campos Obligatorios *</span>
             </div>		
			</form>
		</div>
	</div>
</section>	
<img src="img/bg-bottom-section.jpg" alt="Obertec" title="Obertec" style="width:100%">	
<?php
	require_once("footer.php");
?>