
<link href="<?=URL;?>css/tips.css" rel="stylesheet">

<div class="content">

    <div class="container">
        <div class="container_inner--detail">
            
			<?php
			
			switch( $id )
			{
				case '1' : require_once('1.php'); break;
				case '2' : require_once('2.php'); break;
				case '3' : require_once('3.php'); break;
				case '4' : require_once('4.php'); break;
			}

			?>

        </div>
    </div>

</div>