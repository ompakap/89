

<link href="<?=URL;?>css/product.css" rel="stylesheet">

<div class="ctl_main_ctn">

	<div class="bx_main_ctn">
		<h1 class="tt_product">PRODUCTS</h1>
		<div class="st_product">ALL PRODUCTS</div>
		<div class="bx_ctn_product">
			
			<?php
			foreach( $list as $i => $ls )
			{
			?>
			<div class="bx_list_product">
				<div class="bx_inn_pd">
					<a href="<?=$ls['link'];?>">
						<div class="img_ls_product pd_list0">
							<img width="230" height="255" src="<?=$ls['image'];?>" alt="<?=$ls['name'];?>">
							<!-- <div class="ic_new"><img width="36" height="14" src="<?=$ls['image'];?>" alt="<?=$ls['name'];?>" title="<?=$ls['name'];?>"></div> -->
						</div>
						<div class="dt_ls_product">
							<div class="dt_name"><?=$ls['name'];?></div>
							<div class="dt_detail"><?=$ls['detail'];?> </div>
						</div>
					</a>
				</div>
			</div>
			<?php
			}
			?>

		</div>
	</div>

</div>


<?php

$m = 'nws';

?>