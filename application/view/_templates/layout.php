<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="Generator" content="EditPlus">
	<meta name="Author" content="OM">
	<meta name="Keywords" content="jellysthailand">
	<meta name="Description" content="">

	<!--[if lt IE 9]>
      <script src="<?=URL;?>js/html5shiv.js"></script>
      <script src="<?=URL;?>js/core/respond.min.js"></script>
    <![endif]-->

    <meta name="viewport" content="width=device-width, initial-scale=1">
	
	<script type="text/javascript">
		var _SCREEN_ = (window.devicePixelRatio * screen.width) / window.devicePixelRatio;
		var S = window.innerWidth;
		var media = "desktop";
	    var _VIEWPORT_ = '<meta name="viewport" content="width=device-width, user-scalable=yes" />';
		if((_SCREEN_ <= 1280 && _SCREEN_ >= 768) || (S <= 1280 && S >= 768)){
			media = "tablet";
	    	_VIEWPORT_ = '<meta name="viewport" content="width=1000, user-scalable=yes" />';
		}
		if(_SCREEN_ < 768 || S < 768){
			media = "mobile";
	    	_VIEWPORT_ = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
		}
		document.write(_VIEWPORT_);
	</script>

	<title><?=SITE_TITLE;?></title>

	<link href="<?=URL;?>img/logo.jpg" rel="apple-touch-icon" />
	<link href="<?=URL;?>img/logo.jpg" rel="apple-touch-icon" sizes="76x76" />
	<link href="<?=URL;?>img/logo.jpg" rel="apple-touch-icon" sizes="120x120" />
	<link href="<?=URL;?>img/logo.jpg" rel="apple-touch-icon" sizes="152x152" />
	<link href="<?=URL;?>img/logo.jpg" rel="apple-touch-icon" sizes="180x180" />
	<link href="<?=URL;?>img/logo.jpg" rel="icon" sizes="192x192" />
	<link href="<?=URL;?>img/logo.jpg" rel="icon" sizes="128x128" />

	<?php require APP . 'view/_templates/style.php'; ?>

	

</head>
<body>

<?php require APP . 'view/_templates/header.php'; ?>

<section id="page">
	<section id="main_body">

		<?php require APP . $content;  ?>

	</section>
</section>

<?php require APP . 'view/_templates/footer.php'; ?>


<?php require APP . 'view/_templates/script.php'; ?>

</body>
</html>