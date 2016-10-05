

<link href="<?=URL;?>css/news.css" rel="stylesheet">


<div id="content">

<div class="container">

	<div class="container--inner">

		
		<div class="helvethaica_xcond_med title-text">NEWS</div>

		<div class="clearfix"></div>

		<div class="body-news">

			<?php
			if( count($list) )
			{
				foreach( $list as $i => $ls )
				{
					if( $i == 0 )
					{
					?>
						<div class="link-news--detail first" data-link="<?=$_URL;?>news/detail/<?=$ls['id'];?>">
							<div class="list_news_item first col-xs-12">
									
								<div class="news_item first">
									<div class="row row_no_margin">
										
										<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col_no_padding news_item_first--image">
											<div class="dim_read--desc"><div class="helvethaica_x_li dim_read--text">อ่านรายละเอียด <span class="sprite sprite-white gf"></span></div></div>
											<img height="480" width="480" class="image_news img-responsive" src="<?=$ls['image'];?>" alt="<?=$ls['image'];?>">
										</div>
										<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col_no_padding news_item_first--text"><div class="news_item_first--box_content"><div class="helvethaica_xcond_med news_item_first--date"><?=$ls['date'];?></div><div class="news_item_first--line"></div><div class="helvethaica_x_li news_item_first--title" style="word-wrap: break-word;"><?=$ls['title'];?></div></div></div>
									
									</div>
								</div>

							</div>

						</div>
					<?php
					}
					else
					{
						?>
						<div class="link-news--detail 1 event r" data-link="<?=$_URL;?>news/detail/<?=$ls['id'];?>">
							<div class="list_news_item col-xs-12 col-sm-6 event">
									
								<div class="news_item">
									<div class="row row_no_margin">
										<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col_no_padding news_item_child--image">
											<div class="dim_read--desc">
												<div class="helvethaica_x_li dim_read--text first">
													อ่านรายละเอียด <span class="sprite sprite-white gf"></span>
												</div>
											</div>
											<img height="240" width="240" class="image_news" src="<?=$ls['image'];?>" alt="<?=$ls['image'];?>">
										</div>
										<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col_no_padding news_item_child--text">
											<div class="news_item_child--box_content"><div class="helvethaica_xcond_med news_item_child--date"><?=$ls['date'];?></div><div class="news_item_child--line"></div><div class="helvethaica_x_li news_item_child--title is-truncated" style="word-wrap: break-word;"><?=$ls['title'];?></div></div>
										</div>
									
									</div>
								</div>

							</div>

						</div>
						<?php				
					}
				}
			}
			?>

		</div>

		<div class="clearfix"></div>
	</div>

</div>

</div>



<?php

$m = 'nws';

?>