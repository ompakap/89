<!-- Fixed navbar -->
<section id="header">

	<div id="ctn_header">
		<div class="tp_hd">
			<div class="hd_ctn_lang">
				<div class="bx_show_lang">
					<div class="pipe_lang"></div>
					<?php

					$lang = str_replace('/', '', substr($_URL, strlen($_URL) - 3 ));
					
					$flag_lang = ( $lang == 'th' )? 'flag_th' : 'flag_en';
					$txt_lang = ( $lang == 'th' )? 'ไทย' : 'Eng';
					
					$toggle_flag_lang = ( $lang == 'th' )? 'en' : 'th';
					$toggle_txt_lang = ( $lang == 'th' )? 'Eng' : 'ไทย';
					?>
					<div class="bx_flag <?=$flag_lang;?>"></div>
					<div class="lb_lang"><?=$txt_lang;?></div>
					<div class="clearfix"></div>
				</div>
				<div class="bx_select_lang clearfix">
					<ul>
						<li class="list_flag" onclick="location.href='<?=URL . $toggle_flag_lang;?>'">
							<div class="bx_flag flag_<?=$toggle_flag_lang;?>"></div><div class="lb_lang lb_lang_chn"><?=$toggle_txt_lang;?></div>
							<div class="claerfix"></div>
						</li>
					</ul>
				</div>
			</div>
			<!-- <div class="hd_ctn_search">
				<form id="hd_search_form">
					<input type="text" value="" name="" placeholder="SEARCH" class="inp_search_sty hd_inp_search">
					<input type="submit" value="" id="hd_btn_search">
				</form>
			</div> -->

			<div class="clearfix"></div>
		</div>
	</div>

	<div class="ctn_nav_hd">
		<div id="hd_logo"><a href="<?=URL;?>"></a></div>
		<div class="hd_ctn_menu">
			<div class="lb_close">CLOSE</div>
			<div class="lb_menu"><a id="nav-toggle"><span></span></a></div>
		</div>
		<div class="hd_show_search btn_mobile_search"><div class="ic_search">SEARCH</div></div>
	</div>

	<div id="main_search_mobile" style="display: none;">
		<form id="hd_search_form_mb" class="">
			<input type="text" value="" name="" placeholder="SEARCH" class="inp_search_sty hd_inp_search">
			<input type="submit" value="" id="hd_btn_search_mb">
		</form>
	</div>

	<div id="main_menu" style="">
		<ul class="">
			<li class="list_menu first "><a href="<?=$_URL;?>about"><?=_ABOUT_US;?></a></li>
			<li class="list_menu "><a href="<?=$_URL;?>product">PRODUCTS</a></li>
			<li class="list_menu "><a href="<?=$_URL;?>where_to_buy" class="">WHERE TO BUY</a></li>
			<li class="list_menu "><a href="<?=$_URL;?>news">NEWS</a></li>
			<li class="list_menu "><a href="<?=$_URL;?>tips">BEAUTY TIPS</a></li>
			<li class="list_menu "><a href="<?=$_URL;?>spot_to_fake" class="">SPOT A FAKE</a></li>
			<li class="list_menu last "><a href="<?=$_URL;?>contact_us">CONTACT US</a></li>
			<li class="list_menu_mb">
				<div class="ft_bx_social">
					<div class="ft_list_sc ft_sc1 first"><a href="#" target="_blank"><span>FACEBOOK</span></a></div>
					<div class="ft_list_sc ft_sc2"><a target="_blank" href="#"><span>LINE</span></a></div>
					<div class="ft_list_sc ft_sc3"><a href="#" target="_blank"><span>INSTAGRAM</span></a></div>
					<div class="ft_list_sc ft_sc4"><a href="#" target="_blank"><span>YOUTUBE</span></a></div>
				</div>
			</li>
			<li class="list_menu_mb">
				<div class="bx_lang">
					<div class="list_flag active" onclick="location.href='<?=URL;?>th'">
						<div class="bx_flag flag_th"></div>
						<div class="lb_lang">ไทย</div>
						<div class="claerfix"></div>
					</div>
					<div class="list_flag " onclick="location.href='<?=URL;?>en'">
						<div class="bx_flag flag_en"></div>
						<div class="lb_lang lb_lang_chn">Eng</div>
						<div class="claerfix"></div>
					</div>
				</div>
			</li>
		</ul>
	</div>

</section>