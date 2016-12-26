<style type="text/css">
	
	.text_detail {
		font-size: 2.1em;
	}
	
	.slidebg_step1 {
		background-image: url(/images/products/2/step-dd-cream1.png);
		background-position: left;
		background-repeat: no-repeat;
	}
	.slidebg_step2 {
		background-image: url(/images/products/2/step-dd-cream2.png);
		background-position: right;
		background-repeat: no-repeat;
	}
	.slidebg_step3 {
		background-image: url(/images/products/2/step-dd-cream3.png);
		background-position: left;
		background-repeat: no-repeat;
	}
	.slidebg_1 {
		background-image: url(/images/products/2/milk-extract.png);
		background-position: center;
	}
	.slidebg_2 {
		background-image: url(/images/products/2/alpha-hydroxy-acids.png);
		background-position: center;
	}
	.slidebg_3 {
		background-image: url(/images/products/2/glutathione.png);
		background-position: center;
	}
	.slidebg_4 {
		background-image: url(/images/products/2/vitamin-e.png);
		background-position: center;
	}
	.slidebg_5 {
		background-image: url(/images/products/2/vitamin-b.png);
		background-position: center;
	}
	.slidebg_6 {
		background-image: url(/images/products/2/vitamin-c.png);
		background-position: center;
	}
	.slidebg_7 {
		background-image: url(/images/products/2/snail-extract.png);
		background-position: center;
	}
	.slidebg_8 {
		background-image: url(/images/products/2/horse-oil.png);
		background-position: center;
	}
	.slidebg_9 {
		background-image: url(/images/products/2/ginseng-extract.png);
		background-position: center;
	}
	

	.slide-row {
		margin-top: 50px;
	}

	.slick-slide {
		background: white;
	}

	.txt-topic, .txt-detail {
		font-family: DBHelvet-Li;
		
	}

	.des {
		font-size: 2.3em;
		color: #e673a6;
	}

	.txt-topic {
		font-size: 4em;
	}

	.txt-number {
		margin-bottom: 10px;
		font-family: DBHelvetORI-LiIt;
		font-size: 3em;
		line-height: 1em;
		color: #e673a6;
		padding-bottom: 6px;
	}

	.obj-line {
		border-top: 1px solid #d7d7d7;
		margin: 0 auto;
		width: 30px;
		padding-bottom: 10px;
		margin-bottom: 22px;
	}


	@media screen and (min-width:768px) {
		
		.banner_product.bg1 {
			padding: 0;
			background-image: url(/images/products/2/bg_pureDD01.png);
		}

		.banner_product.bg2 {
			padding: 0;
			background-image: url(/images/products/2/bg_pureDD02.png);
		}

		.box_banner_bg .banner_product .box_banner_image--image .img-show {
			
			margin: 0;
			height: 580px;
			background-position: center 8px;
			background-size: auto 100%;
		}

		.row-product-publish .content-box {
			background-image: url(/images/products/2/bg_pureDD02.png);
			background-position: center;
		}

		.box-txt {
			padding-top: 90px;
		}
		
		.row-slide-detail .slide-row .row-txt .txt-wrap .txt-topic {
			font-size: 3em;
		}

	}
	
	@media screen and (max-width: 767px) {

		.text_fd p {
			display: block !important;
		}

		.text_detail {
			font-size: 1.8em;
			padding: 10px;
		}

		.box_banner_bg .banner_product {
			padding-bottom: 0px;
		}

		.row-product-publish .content-box {
			padding: 0px;
		}

		#banner-mom .slick-list, #banner-mom .slick-track {
			height: 400px !important;
		}
		
		.box_ctn_banner_image {
			height: 490px;
		}

		.slidebg_1 {
			background-position: 100px;
		}
		.slidebg_2 {
			background-position: 100px;
		}
		.slidebg_3 {
			background-position: 100px;
		}
		.slidebg_4 {
			background-position: 100px;
		}
		.slidebg_5 {
			background-position: 100px;
		}
		.slidebg_6 {
			background-position: 100px;
		}
		.slidebg_7 {
			background-position: 100px;
		}
		.slidebg_8 {
			background-position: 100px;
		}
		.slidebg_9 {
			background-position: 100px;
		}
	}

</style>

<?php

$ds_th = ( $_SESSION["Lang"] == 'th' )? '' : 'display:none;';
$ds_en = ( $_SESSION["Lang"] == 'en' )? '' : 'display:none;';

$m = 'pdd';

?>

<div style="<?=$ds_th;?>">

<div class="box_banner_bg">
	<div class="banner_product bg1 pst_left" style="margin:auto; max-width: none;">
		<div class="container contain_prod">
			<div class="box_ctn_banner_image">
				<div class="box_banner_image--image">	
					<div class="img-show text-center">
						<img class="hidden-md hidden-lg" width="290" src="<?=URL;?>images/products/pure_dd_cream_01.jpg" style="margin: auto;">
					</div>
				</div>
			</div>
			<div class="box_ctn_banner_txt">
				<div class="box_banner_txt--boxtxt">
					<!-- <div class="box_banner_txt--text1">SNAILWHITE</div> -->
					<div class="box_banner_txt--text2">เพียว ดีดี ครีม</div>
					<div class="box_banner_txt--line"></div>
					<div class="box_banner_txt--text3">
						<!-- <div class="p1">ครีมกันแดดทาหน้าประสิทธิภาพสูง สูตรบางเบา </div> -->
						<span class="p3">นวัฒกรรมใหม่ล่าสุด ดีดีครีมน้ำแตก สารสกัดนำเข้าจากประเทศเกาหลีผิวขาวใสออร่าทันทีที่ทา ปกป้องผิวจากแสงแดด SPF 100 PA+++ เพียงทาบนผิวกายก็จะมีหยดน้ำเล็กๆ ซึมออกมา แถมยังกันน้ำ กันเหงื่อ ไม่เป็นคราบในระหว่างวันบำรุงผิวจริงให้ขาวขึ้น พร้อมความขาวเนียนเปล่งประกายเพื่อเผยผิวขาวเจิดจรัสนานตลอดวัน</span></div>
					<div class="box_btn"><div class="box_btn_size"></div></div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>

<div class="box_banner_bg">
	<div class="banner_product bg2 pst_right" style="margin:auto; max-width: none;">
		<div class="container contain_prod">
			<div class="box_ctn_banner_image">
				<div class="box_banner_image--image">	
					<div class="img-show text-center">
						<img class="hidden-md hidden-lg" width="290" src="<?=URL;?>images/products/pure_dd_cream_02.jpg" style="margin: auto;">
					</div>
				</div>
			</div>
			<div class="box_ctn_banner_txt">
				<div class="box_banner_txt--boxtxt">
					<!-- <div class="box_banner_txt--text1">SNAILWHITE</div> -->
					<div class="box_banner_txt--text2">เพียว ดีดี ครีม</div>
					<div class="box_banner_txt--line"></div>
					<div class="box_banner_txt--text3">
						<!-- <div class="p1">ครีมกันแดดทาหน้าประสิทธิภาพสูง สูตรบางเบา </div> -->
						<span class="p3">ผิวขาวแบบมีออร่าเจิดจรัสทากลางวันยิ่งเนียน ทากลางคืนยิ่งออร่าทาผิวขาว กันแดด กันน้ำ บำรุงผิว แบบ 3 in 1 ตัวเดียวจบ!!! ครีมกันแดดประสิทธิภาพสูง บางเบาถึงขีดสุด แต่ปกป้องล้ำลึกถึงระดับ DNA เพื่อผิวขาวกระจ่างใส</span></div>
					<div class="box_btn"><div class="box_btn_size"></div></div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>

<div id="row-slide-detail" class="row-slide-detail">
    <div class="row-slide ctrl_bx">
        <div class="slide-box">
			<div class="slide-row pst_right">
				<div class="bx-ct-inner">
					<div class="row-pic pic-1">
						<div class="img-show slidebg_1"></div>
					</div>
					<div class="row-txt">
						<div class="txt-wrap">
							<div class="txt-topic">สารสกัดจากน้ำนม</div>
							<div class="txt-topic-sub">MILK EXTRACT</div>
							<div class="txt-detail">อนุพันธ์เมือกหอยทาก HELIX
								<br>ที่มี Elastin, Collagen, Glycoaminoglycan,Vitamins, Alantoin
								<br>และ Glycolic Acid ซึ่งช่วยในการฟื้นฟูเซลล์ผิวที่เสื่อมสภาพ
								<br>และเพิ่มความยืดหยุ่นให้กับผิวไปพร้อมๆ กับกระตุ้น
								<br>การสร้างคอลลาเจนในผิว ทำให้ผิวกระชับและสดใส</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
    </div>
</div>

<div id="row-slide-howto" class="row-slide-howto">
    <div class="ctrl_bx row-slide">
		<div class="slide-box">
			<div class="slide-row pst_right">
				<div class="bx-ct-inner">
					<div class="row-txt">
						<div class="txt-wrap">
							<div class="txt-topic">3 ขั้นตอน สำหรับการปกป้องผิวของคุณ</div>
							<div class="txt-topic-sub">ใช้ทาผิวกายก่อนออกแดดเป็นประจำทุกวัน หรือในระหว่างวันได้</div>
							<div class="txt-number">1</div>
							<div class="obj-line">
								<div></div>
							</div>
							<div class="txt-detail des">บีบ Pure DD cream ลงบนฝ่ามือ</div>
						</div>
					</div>
					<div class="row-pic">
						<div class="img-show slidebg_step1"></div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
			<div class="slide-row pst_right">
				<div class="bx-ct-inner">
					<div class="row-txt ">
						<div class="txt-wrap">
							<div class="txt-topic">3 ขั้นตอน สำหรับการปกป้องผิวของคุณ</div>
							<div class="txt-topic-sub">ใช้ทาบนใบหน้าหลังจากผลิตภัณฑ์บำรุงผิวก่อนลงเครื่องสำอางค์
								<br>หรือทับเครื่องสำอางค์โดยทาเนื้อครีมบางๆ ในระหว่างวันได้</div>
							<div class="txt-number">2</div>
							<div class="obj-line">
								<div></div>
							</div>
							<div class="txt-detail des">ทาเนื้อครีมให้ทั่วผิวกาย เกลี่ยเนื้อครีมให้ทั่วผิวกาย</div>
						</div>
					</div>
					<div class="row-pic pic-1 ">
						<div class="img-show slidebg_step2"></div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
			<div class="slide-row pst_right">
				<div class="bx-ct-inner">
					<div class="row-txt ">
						<div class="txt-wrap">
							<div class="txt-topic">3 ขั้นตอน สำหรับการปกป้องผิวของคุณ</div>
							<div class="txt-topic-sub">ใช้ทาบนใบหน้าหลังจากผลิตภัณฑ์บำรุงผิวก่อนลงเครื่องสำอางค์
								<br>หรือทับเครื่องสำอางค์โดยทาเนื้อครีมบางๆ ในระหว่างวันได้</div>
							<div class="txt-number">3</div>
							<div class="obj-line">
								<div></div>
							</div>
							<div class="txt-detail des">ตบเบาๆ ให้เนื้อครีมซึมลงสู่ผิว</div>
						</div>
					</div>
					<div class="row-pic pic-1 ">
						<div class="img-show slidebg_step3"></div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
    </div>
</div>

<!-- <div class="box-txt-foot col-xs-12 col-sm-12">
	<div class="foot-row helvethaica_x_it_li">ผลลัพธ์ที่ได้จากการใช้เพียวดีดีครีม <br>-ทาแล้วขาวทันทีที่ทา ผิวขาวออร่าแบบธรรมชาติ <br>-ทาง่ายเหมือนโลชั่น ทาแล้วไม่ติดขน <br>-มีกันแดด SPF100 PA+++ <br>-กันน้ำ กันฝน กันเหงื่อ <br>-ทาแล้วไม่เป็นคราบระหว่างวัน <br>-ใช้ได้ทุกโทนสีผิว ผิวไม่เขียวไม่เทาแน่นอน <br>-ไม่เลอะเสื้อผ้า หรือเบาะรถ <br>-ทาเป็นประจำต่อเนื่องผิวขาวขึ้นจริง</div>
</div>
 -->


<div class="container-fluid">
    <div id="banner-mom" class="row sty_banner">
        <div id="doslick2" class="row-slide row-slide-detail">
                 
			<div class="banner-list">
				<div class="bx-item slide-row pst_left">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">สารสกัดจากน้ำนม</div>
									<div class="txt-topic-sub">MILK EXTRACT</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_1">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">สารสกัดจากน้ำนม</div>
									<div class="txt-topic-sub">MILK EXTRACT</div>
									<div class="txt-detail">อนุพันธ์เมือกหอยทาก HELIX
										<br>มีวิตามินเอสร้างเซลล์ผิวหนังเสริมสร้างระบบภูมิคุ้มกันทำให้ผิวและผมแข็งแรงวิตามินบี2 เสริมกระบวนการที่จำเป็นต่อผิวหนังเป็นสารต้านอนุมูลอิสระช่วยลดการเสื่อมสภาพของเซลล์ในร่างกายในสมัยโบราณมีการนำน้ำนมผสมเครื่องประทินผิวทำให้ผิวหนังชุ่มชื่นไม่แห้งหรือหยาบกระด้างเพราะเป็นที่ทราบดีว่าโมเลกุลในน้ำนมเล็กมากสามารถซึมซับเข้าผิวได้รวดเร็ว</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row pst_right">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">กรดผลไม้</div>
									<div class="txt-topic-sub">ALPHA HYDROXY ACIDS</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_2">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">กรดผลไม้</div>
									<div class="txt-topic-sub">ALPHA HYDROXY ACIDS</div>
									<div class="txt-detail">เป็นกรดที่มีอยู่ในผลไม้ทั่วไปเป็นกลุ่มของสารประกอบประเภทกรดอินทรย์ อาจสกัดจากหลากหลายวิธี เช่นสกัดจากส้ม หรืออ้อย เป็นต้นความแตกต่างของการใช้งานขึ้นอยู่กับเปอร์เซ็นต์การใช้งาน กรณีที่เราใช้ AHAในปริมาณที่ไม่สูง เช่น 5% - 10% สามารถนำมาผลัดเซลล์ผิว และใช้ได้ทุกวันแต่ถ้าเป็น AHA 20% - 50% ต้องควบคุมปริมาณการใช้ เนื่องจาก AHAที่มีความเข้มข้นสูง ผลจะมีประสิทธิภาพมากขึ้น แต่ผลข้างเคียงก็เพิ่มขึ้นด้วยประโยชน์ของ AHA คือการผลัดเซลล์ผิว เร่ง กระตุ้นการผลัดเซลล์ของผิวหนังโดยผิวหน้าจะขาวใส ดูเรียบเนียนขึ้น ฝ้า กระ จุดด่างดำ ดูจางลงแผลเป็นนูนราบลง และลดริ้วรอยก่อยวัย</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row pst_left">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">กลูต้าไธโอน</div>
									<div class="txt-topic-sub">GLUTATHIONE</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_3">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">กลูต้าไธโอน</div>
									<div class="txt-topic-sub">GLUTATHIONE</div>
									<div class="txt-detail">เป็นสารต้านอนุมูลอิสระที่เซลล์ในร่างกายมนุษย์สามารถสังเคราะห์ได้เองมีคุณสมบัติเป็นโปรตีนชนิดหนึ่งทำหน้าที่ในการปกป้องเนื้อเยื่อไม่ให้ถูกทำลายโดยสารอนุมูลอิสระที่สะสมอยู่ตามส่วนต่างๆของร่างกาย สามารถยับยั้งเอนไซม์ไทโรซิเนส (tyrosinase)ได้และส่งผลให้เม็ดสีของผิวหนังเปลี่ยนจากเม็ดสีน้ำตาลดำเป็นเม็ดสีชมพูขาว</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row pst_right">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">วิตามินอี</div>
									<div class="txt-topic-sub">VITAMIN E</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_4">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">วิตามินอี</div>
									<div class="txt-topic-sub">VITAMIN E</div>
									<div class="txt-detail">เป็นวิตามินที่มีสารช่วยต่อต้านอนุมูลอิสระปกป้องเซลล์ผิวหนังจากสารอนุมูลอิสระซึ่งเป็นสาเหตุแห่งการเสื่อมสภาพของเซลล์มีส่วนทำให้การทำงานของผิวทำงานได้อย่างมีประสิทธิภาพมากขึ้นจึงส่งผลช่วยให้ริ้วรอย จุดด่างดำ รอยสิวต่างๆจางลงได้เป็นวิตามินที่นิยมใช้ช่วยรักษารอยแดง รอยสิว และหลุมสิว</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row pst_left">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">วิตามินบี</div>
									<div class="txt-topic-sub">VITAMIN B</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_5">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">วิตามินบี</div>
									<div class="txt-topic-sub">VITAMIN B</div>
									<div class="txt-detail">มีคุณสมบัติในการช่วยกระจายเม็ดสีผิวอย่างดีโดยจะทำการกระจายเม็ดสีใต้ผิวที่จับตัวกันเป็นกลุ่มก้อนเข้มๆให้กระจายออกไปด้านล่างของชั้นผิวและยังช่วยเร่งการผลัดเซลส์ผิวอย่างอ่อนโยนพร้อมกับเพิ่มการสังเคราะห์คอลลาเจนและอีลาสตินชนิดที่ช่วยเพิ่มความกระชับแก่ชั้นผิว จึงมีประสิทธิภาพในด้านความขาวกระจ่างใสช่วยให้ระบบการผลัดเซลส์ผิวทำงานได้อย่างเต็มประสิทธิภาพเพื่อเผยผิวใหม่ที่กระจ่างใสกว่า</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row pst_right">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">วิตามินซี</div>
									<div class="txt-topic-sub">VITAMIN C</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_6">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">วิตามินซี</div>
									<div class="txt-topic-sub">VITAMIN C</div>
									<div class="txt-detail">เป็นสารต้านอนุมูลอิสระที่ช่วยลดริ้วรอย และทำให้ผิวเต่งตึงช่วยป้องกันอันตรายจากรังสียูวีของแสงแดดและช่วยให้เซลล์ผิวหนังได้ปรับสภาพคอลลาเจนซึ่งเป็นใยโปรตีนในหนังแท้ทำให้มีสุขภาพแข็งแรงอัดแน่น ทำให้ผิวดูสวยงามและการที่วิตามินซีช่วยสังเคราะห์คอลลาเจนจึงมีคุณสมบัติรักษาแผลให้หายเร็วขึ้น</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row pst_left">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">สารสกัดเมือกหอยทาก</div>
									<div class="txt-topic-sub">SNAIL EXTRACT</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_7">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">สารสกัดเมือกหอยทาก</div>
									<div class="txt-topic-sub">SNAIL EXTRACT</div>
									<div class="txt-detail">มีคุณสมบัติเป็นสารต้านอนุมูลอิสระที่มีประสิทธิภาพสร้างชุ่มชื้นให้ผิวเพื่อป้องกันการก่อตัวใหม่ของสารอนุมูลอิสระและช่วยซ่อมแซมเซลล์ผิวที่เสียหาย สามารถต่อต้านริ้วรอยมีประสิทธิภาพในการรักษาสิวและรอยแผลเป็นจากสิวช่วยลบเลือนริ้วรอยและยกกระชับผิวได้อย่างดี เพิ่มความยืดหยุ่นให้แก่ผิวหนัง</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row pst_right">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">น้ำมันม้า</div>
									<div class="txt-topic-sub">HORSE OIL</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_8">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">น้ำมันม้า</div>
									<div class="txt-topic-sub">HORSE OIL</div>
									<div class="txt-detail">น้ำมันบริสุทธิ์ที่สกัดจากม้าโดยส่วนใหญ่จะสกัดจากผิวหนังส่วนโคนหางและบริเวณแผงคอของม้าในน้ำมันจะมีส่วนประกอบของ Ceramine อยู่เยอะมากซึ่งมีคุณสมบัติใกล้เคียงกับน้ำมันที่ร่างกายของมนุษย์พบว่ามีการใช้น้ำมันม้านั้นมีมาตั้งแต่สมัยโบราณโดยสามารถใช้ลดอาการอักเสบแสบร้อนของแผลไฟไหม้ น้ำร้อนลวกและใช้บำรุงผิวพรรณให้ชุ่มชื่นได้เป็นอย่างดี</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row pst_left">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">สารสกัดโสม</div>
									<div class="txt-topic-sub">GINSENG EXTRACT</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner slidebg_9">
							<div class="row-pic pic-1 col-md-6">
								<div class="img-show"></div>
							</div>
							<div class="row-txt col-md-6 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">สารสกัดโสม</div>
									<div class="txt-topic-sub">GINSENG EXTRACT</div>
									<div class="txt-detail">มีฤทธิ์ทำลายอนุมูลอิสระของออกซิเจนที่เกิดจากการทำลายไขมัน (lipid oxidation)อนุมูลอิสระนี้มีอนุภาพทำลายเนื้อเยื่อต่าง ๆ ให้เสื่อมสลายลงก่อนเวลาอันควรช่วยปรับสภาพผิวพรรณให้เต่งตึง แลดูอ่อนกว่าวัย ช่วยทำให้ผิวนุ่มและชุ่มชื้นมากขึ้น ป้องกันการเกิดริ้วรอยเหี่ยวย่น ช่วยชะลอริ้วรอยอีกทั้งยังกระตุ้นให้เกิดการหมุนเวียนของโลหิต ใต้ผิวหนังให้มีมากขึ้นทำให้ผิวเปล่งปลั่ง</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

				</div>
			</div>

        </div>
    </div>
</div>





</div>




<div style="<?=$ds_en;?>">

<div class="box_banner_bg">
	<div class="banner_product pst_left" style="margin:auto; max-width: none;">
		<div class="ctrl_bx">
			<div class="box_ctn_banner_image">
				<div class="box_banner_image--image"><div class="img-show"></div></div>
			</div>
			<div class="box_ctn_banner_txt">
				<div class="box_banner_txt--boxtxt">
					<!-- <div class="box_banner_txt--text1">SNAILWHITE</div> -->
					<div class="box_banner_txt--text2">Pure DD Cream</div>
					<div class="box_banner_txt--line"></div>
					<div class="box_banner_txt--text3">
						<!-- <div class="p1">ครีมกันแดดทาหน้าประสิทธิภาพสูง สูตรบางเบา </div> -->
						<span class="p3">New innovation water drop!!! import extract form korea. Suddenly white and clear skin when use.Protect skin from sunlight SPF100 PA+++. When apply on skin, small water drop will appear.Water,sweat resistance. Not mess up. Improve your skin tone to bright skin tone. Take your whiteperfect skin all day.</span></div>
					<div class="box_btn"><div class="box_btn_size"></div></div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>



<div id="row-product-publish" class="row-product-publish">
	<div class="content-box">
		<div class="wrap-ctn">
			<div class="box-txt col-xs-12 col-sm-6">
				<div class="txt-row helvethaica_xcond_li"></div>
				<div class="txt-row helvethaica_xcond_med">Pure DD cream</div>
				<div class="txt-row helvethaica_x_li">
					<div>sunscreen spf 100/ PA+++ DD Cream for Body is delivers flawless-looking skintone. Thisrevolutionary body DD Cream goes on sheer, dries quickly, and works like a moisturizer to visiblyimprove your skin with every use. This lightweight DD Creme creates an instant, even-toned,brighten look. </div>
				</div>
			</div>

			<div class="box-txt col-xs-12 col-sm-6">
				
			</div>
			
			<div class="clear-both"></div>
			
			<div class="box-txt-foot col-xs-12 col-sm-12">
				<div class="foot-row helvethaica_x_it_li">Delivers high-performance. Powerfully protects with Anti-Oxidant Complex and spf100/ PA+++</div>
			</div>

			<div class="clear-both"></div>
		</div>
	</div>
</div>

<!-- <br><br>
<div class="box_banner_bg text_detail">
	<div class="helvethaica_x_li text_fd">

		<p>How to use : squeeze cream onto your plam and touch the cream around the body and equalize tosmooth</p>

		<p>Net. 100ml.</p>

		<p>FDA. 10-1- 5876716</p>


	</div>
</div> -->

</div>



