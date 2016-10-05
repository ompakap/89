
<script type="text/javascript">
<!--
	var _URL = '<?=$_URL;?>';
	var M = '<?=(isset($m))?$m:'';?>';

	var BASE_URL = 'http://jellysthailand.com/';
	var BASE_LANG = 'http://jellysthailand.com/th/';


	var SLANG = 'th';
	var LANG = 'tha';


//-->
</script>


<!-- core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->

<!-- <script src="<?=URL;?>js/jquery-1.12.0.min.js"></script> -->
<script src="<?=URL;?>js/js_jquery_common_combine.js"></script>
<script src="<?=URL;?>js/video.min.js"></script>

<?php
$m = isset($m) ? $m : '';

switch( $m )
{
	case 'nws': 
	case 'nwd': 
	case 'nde': 
		echo '<script src="'.URL.'js/news_combine.js"></script>'; 
	break;

	default : echo '<script src="'.URL.'js/combine.js"></script>';
}

?>

<script src="<?=URL;?>js/89.js"></script>

<!-- 
<script src="<?=URL;?>js/bootstrap.min.js"></script>
<script src="<?=URL;?>js/jquery.form.min.js"></script>
<script src="<?=URL;?>js/jquery.bcSwipe.js"></script> -->

<!--[if lte IE 9]>
 	<script src="<?=URL;?>js/placeholder.min.js"></script>
<![endif]-->


<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="<?=URL;?>assets/js/ie10-viewport-bug-workaround.js"></script>


<script type="text/javascript">
<!--
	
if( undefined !== jelly[M] )
{
	jelly[M].init();
}

//-->
</script>


