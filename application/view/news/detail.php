

<link href="<?=URL;?>css/slick_news.css" rel="stylesheet">


<div id="content">

<div class="container">

	<div class="container_inner--detail">
		
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col_no_padding">
			
			<?php
			if( count($detail) )
			{
				?>
			<div class="c_box--right">
				
				<div class="c_box_title">
					<span class="helvethaica_xcond_med txt_date"><?=$detail['date'];?></span>
					<div class="news_item--line"></div>
					<span class="helvethaica_x_li txt_title"><?=$detail['title'];?></span>
				</div>

				<div class="c_box_socials" style="border-bottom: none;">
					<div class="box_socials">
						<!-- <span class="helvethaica_x_li box_socials--textshere">แชร์บทความนี้: </span> -->
					</div>
				</div>
				
				

				<div class="c_box_fulldetail">
					<div class="c_box_fulldetail--text">

						

						<div class="slide_news_box">
							<div class="slide_news_box--show slider-for">
								<?php
								foreach( $detail['image'] as $img )
								{
								?>
								<div class="main_hero_banner inner-image">
									<img class="img-responsive" src="<?=$img['path'];?>" alt="<?=$img['title'];?>" title="<?=$img['title'];?>">
								</div>
								<?php
								}
								?>
							</div>
						
							<?php
							if( count($detail['image']) > 1 )
							{
							?>
							<div class="slide_news_box--thumb slider-nav slick-slider">
								<?php
								foreach( $detail['image'] as $img )
								{
								?>
								<div class="sub_hero_banner inner-image">
									<div class="thumb-dim"></div>
									<img class="img-responsive" src="<?=$img['path'];?>" alt="<?=$img['title'];?>" title="<?=$img['title'];?>">
								</div>
								<?php
								}
								?>
							</div>
							<?php
							}
							else
							{
								echo '<br>';
							}
							?>
				
						</div>
					</div>

					<div class="helvethaica_x_li" style="font-size: 18px;">
						<?=$detail['description'];?>
					</div>
					<br>
				</div>
			</div>
				<?php
			}
			?>
		</div>

	</div>

</div>

</div>



<?php

$m = 'nwd';

?>