<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="Generator" content="EditPlus">
	<meta name="Author" content="OM">
	<meta name="Keywords" content="jellysthailand">
	<meta name="Description" content="">
	<meta name="viewport" content="width=device-width">

	<title><?=SITE_TITLE;?></title>

	<link href="<?=URL;?>img/logo.gif" rel="apple-touch-icon" />
	<link href="<?=URL;?>img/logo.gif" rel="apple-touch-icon" sizes="76x76" />
	<link href="<?=URL;?>img/logo.gif" rel="apple-touch-icon" sizes="120x120" />
	<link href="<?=URL;?>img/logo.gif" rel="apple-touch-icon" sizes="152x152" />
	<link href="<?=URL;?>img/logo.gif" rel="apple-touch-icon" sizes="180x180" />
	<link href="<?=URL;?>img/logo.gif" rel="icon" sizes="192x192" />
	<link href="<?=URL;?>img/logo.gif" rel="icon" sizes="128x128" />

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