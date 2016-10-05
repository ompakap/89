

<link href="<?=URL;?>css/contact_us.css" rel="stylesheet">

<div class="content__wrap">
	
	<div class="content__detail col-xs-12 col-sm-6">
		<div class="content__detail__title helvethaica_xcond_med">CONTACT US</div>
		<div class="content__detail__des helvethaica_x_li">หากมีคำถาม ต้องการพูดคุย แค่กรอกรายละเอียดง่ายๆ หรือติดต่อผ่านช่องทางดังนี้</div>
		<div class="content__detail__contact contact-box">

		
			
			<div class="contact-box__row">
				<div class="contact-box__row__pic contact-box__row__pic--tel"></div>
				<div class="contact-box__row__txt">
					<div class="contact-box__row__txt__row helvethaica_x_li">หมายเลขโทรศัพท์</div>
					<div class="contact-box__row__txt__row helvethaica_xcond_med"><a href="tel:089999999">+668 9999 9999</a></div>
				</div>
				<div class="clear-both"></div>
			</div>

			<div class="contact-box__row">
				<div class="contact-box__row__pic contact-box__row__pic--mail"></div>
				<div class="contact-box__row__txt">
					<div class="contact-box__row__txt__row helvethaica_x_li">ส่งอีเมลถึงเรา</div>
					<div class="contact-box__row__txt__row helvethaica_xcond_med"><a href="mailto:info@jellysthailand.com" target="_top">info@jellysthailand.com</a></div>
				</div>
				<div class="clear-both"></div>
			</div>
		</div>
	</div>

	<div class="content__form col-xs-12 col-sm-6">
		<div class="content__form__row helvethaica_x_li">
			<form action="" method="post" id="frm1" class="content__form__row__form-box">
				<div class="content__form__row__form-box__inp-box line">
					<input type="text" autocomplete="off" id="flname" name="flname" class="content__form__row__form-box__inp-box__inp inp-chk" placeholder="ชื่อของคุณ">
				</div>
				<div class="content__form__row__form-box__inp-box line">
					<input type="text" autocomplete="off" id="mail" name="mail" class="content__form__row__form-box__inp-box__inp inp-chk inp-chk-mail" placeholder="อีเมล">
				</div>
				<div class="content__form__row__form-box__inp-box line">
					<input type="text" autocomplete="off" id="topic" name="topic" class="content__form__row__form-box__inp-box__inp inp-chk" placeholder="เรื่อง">
				</div>
				<div class="content__form__row__form-box__inp-box line">
					<textarea rows="6" cols="50" id="description" name="description" class="content__form__row__form-box__inp-box__inp inp-chk" placeholder="พิมพ์ข้อความที่นี่"></textarea>
				</div>
				<div class="content__form__row__form-box__inp-box content__form__row__form-box__inp-box--notifications">
				<div class="suggestion" style="color: red; display: none; font-size: 1em; line-height: 1; padding-top: 0.5em;"></div></div>
				<div class="content__form__row__form-box__btn-box">
					<input type="hidden" name="csrf" value="55bcb03b07e6b885b894691248c9ea3b">
					<button type="submit" class="content__form__row__form-box__btn-box__btn content__form__row__form-box__btn-box__btn--submit">ส่งข้อความ</button>
					<button type="button" class="content__form__row__form-box__btn-box__btn content__form__row__form-box__btn-box__btn--loading">Sending...</button>
					<button type="reset" class="content__form__row__form-box__btn-box__btn">ยกเลิก</button>
				</div>
			</form>
		</div>

		<div class="content__form__row"></div>
	</div>
	
	<div class="clear-both"></div>

</div>