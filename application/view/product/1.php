<style type="text/css">
	
	.text_detail {
		font-size: 2.1em;
	}
	
	.slidebg_1 {
		background-image: url(/images/products/1/milk-extract.png);
		background-position: center;
	}
	.slidebg_2 {
		background-image: url(/images/products/1/alpha-hydroxy-acids.png);
		background-position: center;
	}
	.slidebg_3 {
		background-image: url(/images/products/1/glutathione.png);
		background-position: center;
	}
	.slidebg_4 {
		background-image: url(/images/products/1/vitamin-e.png);
		background-position: center;
	}
	.slidebg_5 {
		background-image: url(/images/products/1/vitamin-b.png);
		background-position: center;
	}
	.slidebg_6 {
		background-image: url(/images/products/1/vitamin-c.png);
		background-position: center;
	}
	

	.slide-row {
		margin-top: 50px;
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
		
		.box_banner_bg .banner_product {
			padding: 0;
			background-image: url(/images/products/1/bg_purecream01.png);
		}

		.box_banner_bg .banner_product .box_banner_image--image .img-show {
			
			margin: 0;
			height: 580px;
			background-position: center 8px;
			background-size: auto 100%;
		}

		.row-product-publish .content-box {
			background-image: url(/images/products/1/bg_purecream02.png);
			background-position: center;
		}

		.box-txt {
			padding-top: 90px;
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

		.contain_prod {
			padding: 60px 0;
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

	}

</style>

<?php

$ds_th = ( $_SESSION["Lang"] == 'th' )? '' : 'display:none;';
$ds_en = ( $_SESSION["Lang"] == 'en' )? '' : 'display:none;';

$m = 'pdd';
?>


<div style="<?=$ds_th;?>">

<div class="box_banner_bg">
	<div class="banner_product pst_right" style="margin:auto; max-width: none;">
		<div class="container contain_prod">
			<div class="box_ctn_banner_image">
				<div class="box_banner_image--image">	
					<div class="img-show text-center">
						<img class="hidden-md hidden-lg" width="290" src="<?=URL;?>images/products/pure_cream_01_edited.jpg" style="margin: auto;">
					</div>
				</div>
			</div>
			<div class="box_ctn_banner_txt">
				<div class="box_banner_txt--boxtxt">
					<!-- <div class="box_banner_txt--text1">SNAILWHITE</div> -->
					<div class="box_banner_txt--text2">เพียวครีม</div>
					<div class="box_banner_txt--line"></div>
					<div class="box_banner_txt--text3">
						<!-- <div class="p1">ครีมกันแดดทาหน้าประสิทธิภาพสูง สูตรบางเบา </div> -->
						<span class="p3">ฟื้นฟูผิวขาวกระจ่างใสเพียงข้ามคืนที่ช่วยฟื้นบำรุงผิวที่ร่วงโรยแบบเข้มข้นพร้อมชาร์ตพลังให้ผิวคุณในขณะหลับและฟื้นบำรุงผิวอย่างล้ำลึก  อุดมไปด้วยสารสกัดจากธรรมชาติอันทรงคุณค่าสูตรเฉพาะของ Jellys ช่วยฟื้นบำรุงผิวให้ขาวกระจ่างใสผิวเรียบเนียนขึ้นตั้งแต่ครั้งแรกที่ใช้ และช่วยให้ผิวนุ่มชุ่มชื้นผลัดเซลล์ผิวที่หมองคล้ำให้กลับมาแลดูขาวกระจ่างใสเรียบเนียนอย่างเป็นธรรมชาติ ให้คุณตื่นรับวันใหม่พร้อมผิวสุขภาพดีในทุกๆวัน</span></div>
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
			<div class="box-pic col-xs-12 col-sm-6">
				<img class="hidden-md hidden-lg" width="290" src="<?=URL;?>images/products/pure_cream_02_edited.jpg" style="margin: auto;">
			</div>
			<div class="box-txt col-xs-12 col-sm-6">
				<div class="txt-row helvethaica_xcond_li"></div>
				<div class="txt-row helvethaica_xcond_med">เพียวครีม</div>
				<div class="txt-row helvethaica_x_li">
					<div>ให้ความรู้สึกแตกต่างด้วยเนื้อบางเบาและซึมซาบสู่ผิวอย่างรวดเร็วไม่เหนอะหนะ สามารถซึมลึกเข้าสู่ผิวชั้นในได้อย่างล้ำลึกเพื่อฟื้นฟูและแก้ไขทุกปัญหาผิวพร้อมชาร์ตพลังผิวให้สวยเปล่งประกายกระจ่างใสในชั่วข้ามคืน  เผยผิวขาวกระจ่างใสแบบมีออร่า เน้นฟื้นฟูผิวขณะหลับ ปรับสภาพผิวยามค่ำคืนปรนนิบัติผิวคุณอย่างล้ำลึกถึงเซลล์ผิว</div>
				</div>
			</div>
			
			<div class="clear-both"></div>
			
			<div class="box-txt-foot col-xs-12 col-sm-12">
				<div class="foot-row helvethaica_x_it_li">&quot;มาร์คผิวไว้ก่อนนอน ตื่นมาผิวขาวใสขึ้นกว่าเดิม&quot; ปรับสภาพผิวให้ขาวออร่าสุขภาพแบบเร่งด่วน ลดรอยจุดด่างดำ รอยแตกลาย ข้อศอก ข้อพับ เข่า ขาหนีบรักแร้ให้ขาวเนียนใสบำรุงผิวอย่างล้ำลึก</div>
			</div>

			<div class="clear-both"></div>
		</div>
	</div>
</div>

<div class="container-fluid">
    <div id="banner-mom" class="row sty_banner">
        <div id="doslick1" class="row-slide row-slide-detail">
                 
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

        </div>
    </div>
</div>

<div class="container-fluid">
    <div id="banner-mom" class="row sty_banner">
        <div id="doslick2" class="row-slide row-slide-detail">
                 
			<div class="banner-list">
				<div class="bx-item slide-row">
					<div id="img_lg" class="img_lg_style">
						<div class="bx-ct-inner">
							<div class="row-txtx col-md-12 text-center">
								<div class="txt-wrapx">
									<div class="txt-topic">ผลลัพธ์ที่ได้จากการใช้เพียวครีม</div><br><br>
									<div class="txt-topic-sub"></div>
									<div class="txt-number h4">1</div><br><br>
									<div class="obj-line"><div></div></div>
									<div class="txt-detail des">ผิวขาวขึ้นหลายระดับ ปลอดภัยไม่มีสารอันตรายใดๆ </div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row">
					<div id="img_lg" class="img_lg_style">
						<div class="bx-ct-inner">
							<div class="row-txtx col-md-12 text-center">
								<div class="txt-wrapx">
									<div class="txt-topic">ผลลัพธ์ที่ได้จากการใช้เพียวครีม</div><br><br>
									<div class="txt-topic-sub"></div>
									<div class="txt-number h4">2</div><br><br>
									<div class="obj-line"><div></div></div>
									<div class="txt-detail des">ปรับผิวขาวออร่า กระจ่างใส เปล่งประกาย</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row">
					<div id="img_lg" class="img_lg_style">
						<div class="bx-ct-inner">
							<div class="row-txtx col-md-12 text-center">
								<div class="txt-wrapx">
									<div class="txt-topic">ผลลัพธ์ที่ได้จากการใช้เพียวครีม</div><br><br>
									<div class="txt-topic-sub"></div>
									<div class="txt-number h4">3</div><br><br>
									<div class="obj-line"><div></div></div>
									<div class="txt-detail des">ช่วยต่อต้านอนุมูลอิสระ ดูสุขภาพดี</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row">
					<div id="img_lg" class="img_lg_style">
						<div class="bx-ct-inner">
							<div class="row-txtx col-md-12 text-center">
								<div class="txt-wrapx">
									<div class="txt-topic">ผลลัพธ์ที่ได้จากการใช้เพียวครีม</div><br><br>
									<div class="txt-topic-sub"></div>
									<div class="txt-number h4">4</div><br><br>
									<div class="obj-line"><div></div></div>
									<div class="txt-detail des">ช่วยปรับสีผิวที่ไม่สม่ำเสมอ ผิวไหม้แดด คล้ำไม่ขาวเนียน รักแร้ ข้อพับง่ามขาหนีบ หัวเข่า ข้อศอก ให้เท่ากัน และขาวขึ้นจนสัมผัสได้</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row">
					<div id="img_lg" class="img_lg_style">
						<div class="bx-ct-inner">
							<div class="row-txtx col-md-12 text-center">
								<div class="txt-wrapx">
									<div class="txt-topic">ผลลัพธ์ที่ได้จากการใช้เพียวครีม</div><br><br>
									<div class="txt-topic-sub"></div>
									<div class="txt-number h4">5</div><br><br>
									<div class="obj-line"><div></div></div>
									<div class="txt-detail des">ช่วยลดเลือนริ้วรอย กระ จุดด่างดำ รักษารอยแผลเป็นต่างๆ </div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row">
					<div id="img_lg" class="img_lg_style">
						<div class="bx-ct-inner">
							<div class="row-txtx col-md-12 text-center">
								<div class="txt-wrapx">
									<div class="txt-topic">ผลลัพธ์ที่ได้จากการใช้เพียวครีม</div><br><br>
									<div class="txt-topic-sub"></div>
									<div class="txt-number h4">6</div><br><br>
									<div class="obj-line"><div></div></div>
									<div class="txt-detail des">ช่วยลดรอยแตกลาย ขา หน้าท้อง </div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row">
					<div id="img_lg" class="img_lg_style">
						<div class="bx-ct-inner">
							<div class="row-txtx col-md-12 text-center">
								<div class="txt-wrapx">
									<div class="txt-topic">ผลลัพธ์ที่ได้จากการใช้เพียวครีม</div><br><br>
									<div class="txt-topic-sub"></div>
									<div class="txt-number h4">7</div><br><br>
									<div class="obj-line"><div></div></div>
									<div class="txt-detail des">ช่วยให้ผิวขาวเนียนเด้ง ผิวชุ่มชื้น มีน้ำมีนวล อุดมด้วยวิตามินและแร่ธาตุ </div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="banner-list">
				<div class="bx-item slide-row">
					<div id="img_lg" class="img_lg_style">
						<div class="bx-ct-inner">
							<div class="row-txtx col-md-12 text-center">
								<div class="txt-wrapx">
									<div class="txt-topic">ผลลัพธ์ที่ได้จากการใช้เพียวครีม</div><br><br>
									<div class="txt-topic-sub"></div>
									<div class="txt-number h4">8</div><br><br>
									<div class="obj-line"><div></div></div>
									<div class="txt-detail des">ฟื้นฟูผิวคล้ำเสีย ผิวเนียนน่าสัมผัส</div>
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
	<div class="banner_product pst_right" style="margin:auto; max-width: none;">
		<div class="container contain_prod">
			<div class="box_ctn_banner_image">
				<div class="box_banner_image--image">	
					<div class="img-show text-center">
						<img class="hidden-md hidden-lg" width="290" src="<?=URL;?>images/products/pure_cream_01_edited.jpg" style="margin: auto;">
					</div>
				</div>
			</div>
			<div class="box_ctn_banner_txt">
				<div class="box_banner_txt--boxtxt">
					<!-- <div class="box_banner_txt--text1">SNAILWHITE</div> -->
					<div class="box_banner_txt--text2">Pure Cream</div>
					<div class="box_banner_txt--line"></div>
					<div class="box_banner_txt--text3">
						<!-- <div class="p1">ครีมกันแดดทาหน้าประสิทธิภาพสูง สูตรบางเบา </div> -->
						<span class="p3">improve your skin tone to bright skin. lntensive treatment your skin while you sleep. High intensivetreatment deep to your skin cell.</span></div>
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
			<div class="box-pic col-xs-12 col-sm-6">
				<img class="hidden-md hidden-lg" width="290" src="<?=URL;?>images/products/pure_cream_02_edited.jpg" style="margin: auto;">
			</div>
			<div class="box-txt col-xs-12 col-sm-6">
				<div class="txt-row helvethaica_xcond_li"></div>
				<div class="txt-row helvethaica_xcond_med">Pure Cream</div>
				<div class="txt-row helvethaica_x_li">
					<div>Concentrated glutathione you can see clearly in 7 days. White bright and aura skin smooth andhealthy skin.</div>
				</div>
			</div>
			
			<div class="clear-both"></div>
			
			<div class="box-txt-foot col-xs-12 col-sm-12">
				<div class="foot-row helvethaica_x_it_li">Add fair skin look like the natural white skin, nourishing skin and sun protection well.Light cream to equalize easily spread and not sticky. Features available with for all skin to whiteradiant skin.</div>
			</div>

			<div class="clear-both"></div>
		</div>
	</div>
</div>

<div class="container-fluid">
    <div id="banner-mom" class="row sty_banner">
        <div id="doslicke1" class="row-slide row-slide-detail">
                 
			<div class="banner-list">
				<div class="bx-item slide-row pst_right">
					<div id="img_xs" class="img_xs_style visible-xs">
						<div class="bx-ct-inner">
							<div class="row-txt col-md-12 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">How to use</div>
									<div class="txt-detail">squeeze cream onto your plam and touch the cream around the body and equalize tosmooth</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner">
							<div class="row-txt col-md-12 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">How to use</div>
									<div class="txt-detail">squeeze cream onto your plam and touch the cream around the body and equalize tosmooth</div>
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
							<div class="row-txt col-md-12 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">Net. 30 g.</div>
								
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner">
							<div class="row-txt col-md-12 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">Net. 30 g.</div>
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
							<div class="row-txt col-md-12 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">FDA. 10-1- 5835261</div>
								
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div id="img_lg" class="img_lg_style hidden-xs">
						<div class="bx-ct-inner">
							<div class="row-txt col-md-12 text-center">
								<div class="txt-wrap">
									<div class="txt-topic">FDA. 10-1- 5835261</div>
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