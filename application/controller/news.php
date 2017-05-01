<?php

/**
 * Class Error
 *
 * Please note:
 * Don't use the same name for class and method, as this might trigger an (unintended) __construct of the class.
 * This is really weird behaviour, but documented here: http://php.net/manual/en/language.oop5.decon.php
 *
 */
class News extends Controller
{
    /**
     * PAGE: index
     * This method handles the error page that will be shown when a page is not found
     */
    public function index()
    {
		$_URL = URL . $_SESSION["Lang"] . "/";
		
		$list = $this->getnewslist();

        // load views
		$content = 'view/news/index.php';
        require APP . 'view/_templates/layout.php';
    }

    public function detail($p, $id)
    {
		$_URL = URL . $_SESSION["Lang"] . "/";
		
		$detail = $this->getdetail($id);

        // load views
		$content = 'view/news/detail.php';
        require APP . 'view/_templates/layout.php';
    }

	public function getnewslist()
	{
		$response = array(
			'0' => array( 'id' => 7, 'title' => 'ตลาดนัดแตก ‼️‼️' , 'image' => URL . '/images/news/market01.jpg', "date" => '28&nbsp;March&nbsp;2017' ),
			'1' => array( 'id' => 6, 'title' => 'Grand opening Pure face sunscreen cream by Jellys' , 'image' => URL . '/images/news/grand01.jpg', "date" => '05&nbsp;March&nbsp;2017' ),
			'2' => array( 'id' => 5, 'title' => 'CEO THAILAND AWARDS 2017' , 'image' => URL . '/images/news/ceo01.jpg', "date" => '25&nbsp;February&nbsp;2017' ),
			'3' => array( 'id' => 4, 'title' => 'วันที่13-15 มกราคม 2560 ครอบครัวเจลลี่ เที่ยว กิน ทัวร์ไหว้พระที่ประเทศฮ่องกง ' , 'image' => URL . '/images/news/hongkong01.jpg', "date" => '13&nbsp;JANUARY&nbsp;2017' ),
			'4' => array( 'id' => 3, 'title' => 'TOP BRAND AWARDS 2016' , 'image' => URL . '/images/news/top_brand_awards_01.jpg', "date" => '03&nbsp;SEPTEMBER&nbsp;2016' ),
			'5' => array( 'id' => 2, 'title' => 'ASIA BEAUTY & COSMETIC EXPO 2016' , 'image' => URL . '/images/news/asia_beauty_cosmetic_expo_01.jpg', "date" => '28&nbsp;APRIL&nbsp;2016' ),
			'6' => array( 'id' => 1, 'title' => 'ทริปพาตัวแทนJellys (เจลลี่) เที่ยวญี่ปุ่น วันที่ 21-26 มกราคม 2559' , 'image' => URL . '/images/news/japan_trip_01.jpg', "date" => '28&nbsp;APRIL&nbsp;2016' )
		);

		return $response;
	}

	public function getdetail($id)
	{
		switch( $id )
		{
			case '1' :

					$response = array(
						"image" => array(
							array( 'title'=>'01', 'path'=>URL.'images/news/japan_trip_01.jpg')
						),

						"date" => '21&nbsp;JANUARY&nbsp;2016',
						"title" => 'ทริปพาตัวแทนJellys (เจลลี่) เที่ยวญี่ปุ่น วันที่ 21-26 มกราคม 2559',
						"description" => ''
					);

				break;

			case '2' :

					$response = array(
						"image" => array(
							array( 'title'=>'01', 'path'=>URL.'images/news/asia_beauty_cosmetic_expo_01.jpg'),
							array( 'title'=>'02', 'path'=>URL.'images/news/asia_beauty_cosmetic_expo_02.jpg'),
							array( 'title'=>'03', 'path'=>URL.'images/news/asia_beauty_cosmetic_expo_03.jpg'),
							array( 'title'=>'04', 'path'=>URL.'images/news/asia_beauty_cosmetic_expo_04.jpg'),
							array( 'title'=>'05', 'path'=>URL.'images/news/asia_beauty_cosmetic_expo_05.jpg'),
							array( 'title'=>'06', 'path'=>URL.'images/news/asia_beauty_cosmetic_expo_06.jpg'),
							array( 'title'=>'07', 'path'=>URL.'images/news/asia_beauty_cosmetic_expo_07.jpg'),
							array( 'title'=>'08', 'path'=>URL.'images/news/asia_beauty_cosmetic_expo_08.jpg')
						),

						"date" => '28&nbsp;APRIL&nbsp;2016',
						"title" => 'ASIA BEAUTY & COSMETIC EXPO 2016 ที่ อิมแพ๊ค เมืองทองธานี ฮอลล์ 1 วันที่ 28 เมษายน-1พฤษภาคม 2559',
						"description" => ''
					);

				break;

			case '3' :

					$response = array(
						"image" => array(
							array( 'title'=>'01', 'path'=>URL.'images/news/top_brand_awards_01.jpg'),
							array( 'title'=>'02', 'path'=>URL.'images/news/top_brand_awards_02.jpg'),
							array( 'title'=>'03', 'path'=>URL.'images/news/top_brand_awards_03.jpg'),
							array( 'title'=>'04', 'path'=>URL.'images/news/top_brand_awards_04.jpg'),
							array( 'title'=>'05', 'path'=>URL.'images/news/top_brand_awards_05.jpg'),
							array( 'title'=>'06', 'path'=>URL.'images/news/top_brand_awards_06.jpg'),
							array( 'title'=>'07', 'path'=>URL.'images/news/top_brand_awards_07.jpg'),
							array( 'title'=>'08', 'path'=>URL.'images/news/top_brand_awards_08.jpg'),
							array( 'title'=>'09', 'path'=>URL.'images/news/top_brand_awards_09.jpg'),
							array( 'title'=>'19', 'path'=>URL.'images/news/top_brand_awards_10.jpg'),
							array( 'title'=>'11', 'path'=>URL.'images/news/top_brand_awards_11.jpg'),
							array( 'title'=>'12', 'path'=>URL.'images/news/top_brand_awards_12.jpg'),
							array( 'title'=>'13', 'path'=>URL.'images/news/top_brand_awards_13.jpg'),
							array( 'title'=>'14', 'path'=>URL.'images/news/top_brand_awards_14.jpg'),
							array( 'title'=>'15', 'path'=>URL.'images/news/top_brand_awards_15.jpg')
						),

						"date" => '03&nbsp;SEPTEMBER&nbsp;2016',
						"title" => 'ผลิตภัณฑ์แบรนด์Jellys(เจลลี่) การันตีด้วยคุณภาพมาตรฐานจากรางวัลTOP BRAND AWARDS 2016 วันที่ 3 กันยายน 2559',
						"description" => ''
					);

				break;

			case '4' :

					$response = array(
						"image" => array(
							array( 'title'=>'01', 'path'=>URL.'images/news/hongkong01.jpg'),
							array( 'title'=>'02', 'path'=>URL.'images/news/hongkong02.jpg'),
							array( 'title'=>'03', 'path'=>URL.'images/news/hongkong03.jpg'),
							array( 'title'=>'04', 'path'=>URL.'images/news/hongkong04.jpg'),
							array( 'title'=>'05', 'path'=>URL.'images/news/hongkong05.jpg'),
							array( 'title'=>'06', 'path'=>URL.'images/news/hongkong06.jpg'),
							array( 'title'=>'07', 'path'=>URL.'images/news/hongkong07.jpg'),
							array( 'title'=>'08', 'path'=>URL.'images/news/hongkong08.jpg'),
							array( 'title'=>'09', 'path'=>URL.'images/news/hongkong09.jpg')
						),

						"date" => '13&nbsp;JANUARY&nbsp;2017',
						"title" => 'วันที่13-15 มกราคม 2560 แบรนด์เจลลี่พาสมาชิกครอบครัวเจลลี่ เที่ยว กิน ทัวร์ไหว้พระที่ประเทศฮ่องกง ',
						"description" => ''
					);

				break;

			case '5' :

					$response = array(
						"image" => array(
							array( 'title'=>'01', 'path'=>URL.'images/news/ceo01.jpg'),
							array( 'title'=>'02', 'path'=>URL.'images/news/ceo02.jpg'),
							array( 'title'=>'03', 'path'=>URL.'images/news/ceo03.jpg')
						),

						"date" => '25&nbsp;February&nbsp;2017',
						"title" => 'CEO THAILAND AWARDS 2017',
						"description" => 'ภาพบรรยากาศที่คุณณัฐกานต์ บุราณรมย์ กรรมการบริษัท เอ็นทีบี พลัส (ไทยแลนด์) จำกัด และผู้บริหารสินค้าในเครือแบรนด์ Jellys (เจลลี่) ได้รับรางวัล CEO THAILAND AWARDS 2017 (ผู้บริหารแห่งปี 2017) วันที่ 25 กุมภาพันธ์ 2560 ณ ศูนย์ประชุม สถาบันวิจัยจุฬาภรณ์ กรุงเทพมหานครฯ'
					);

				break;

			case '6' :

					$response = array(
						"image" => array(
							array( 'title'=>'01', 'path'=>URL.'images/news/grand01.jpg'),
							array( 'title'=>'02', 'path'=>URL.'images/news/grand02.jpg'),
							array( 'title'=>'03', 'path'=>URL.'images/news/grand03.jpg'),
							array( 'title'=>'04', 'path'=>URL.'images/news/grand04.jpg'),
							array( 'title'=>'05', 'path'=>URL.'images/news/grand05.jpg'),
							//array( 'title'=>'06', 'path'=>URL.'images/news/grand06.jpg'),
							array( 'title'=>'07', 'path'=>URL.'images/news/grand07.jpg'),
							array( 'title'=>'08', 'path'=>URL.'images/news/grand08.jpg'),
							array( 'title'=>'09', 'path'=>URL.'images/news/grand09.jpg'),
							array( 'title'=>'10', 'path'=>URL.'images/news/grand10.jpg'),
							array( 'title'=>'11', 'path'=>URL.'images/news/grand11.jpg')
						),

						"video" => array('r10oIEZjpCU&t=59s'),

						"date" => '05&nbsp;March&nbsp;2017',
						"title" => 'Grand opening Pure face sunscreen cream by Jellys',
						"description" => 'ภาพบรรยากาศงานเปิดตัวสินค้า "ครีมกันแดดหน้าเพียวเฟส" ที่ ศูนย์การค้าเซ็นทรัลบางนา เปิดตัวอย่างเป็นทางการ พร้อมดาราศิลปินพิเศษมากมาย '
					);

				break;

			case '7' :

					$response = array(
						"image" => array(
							array( 'title'=>'01', 'path'=>URL.'images/news/market01.jpg'),
							array( 'title'=>'02', 'path'=>URL.'images/news/market02.jpg'),
							array( 'title'=>'03', 'path'=>URL.'images/news/market03.jpg'),
							array( 'title'=>'04', 'path'=>URL.'images/news/market04.jpg'),
							array( 'title'=>'05', 'path'=>URL.'images/news/market05.jpg'),
							array( 'title'=>'06', 'path'=>URL.'images/news/market06.jpg'),
							array( 'title'=>'07', 'path'=>URL.'images/news/market07.jpg'),
							array( 'title'=>'08', 'path'=>URL.'images/news/market08.jpg'),
							array( 'title'=>'09', 'path'=>URL.'images/news/market09.jpg'),
							array( 'title'=>'10', 'path'=>URL.'images/news/market10.jpg'),
							array( 'title'=>'11', 'path'=>URL.'images/news/market11.jpg'),
							array( 'title'=>'12', 'path'=>URL.'images/news/market12.jpg'),
							array( 'title'=>'13', 'path'=>URL.'images/news/market13.jpg'),
							array( 'title'=>'14', 'path'=>URL.'images/news/market14.jpg'),
							array( 'title'=>'15', 'path'=>URL.'images/news/market15.jpg'),
							array( 'title'=>'16', 'path'=>URL.'images/news/market16.jpg'),
							array( 'title'=>'17', 'path'=>URL.'images/news/market17.jpg'),
							array( 'title'=>'18', 'path'=>URL.'images/news/market18.jpg'),
							array( 'title'=>'19', 'path'=>URL.'images/news/market19.jpg'),
							array( 'title'=>'20', 'path'=>URL.'images/news/market20.jpg'),
							array( 'title'=>'21', 'path'=>URL.'images/news/market21.jpg')
						),

						"date" => '28&nbsp;March&nbsp;2017',
						"title" => 'ตลาดนัดแตก ‼️‼️',
						"description" => 'ภาพบรรยากาศ #งานเดินทรูป #ครีมกันแดดหน้าเพียวเฟส ตะลุยตลาดนัดจตุจักร กทม. ในวันที่ 22 เมษายน 2560 ที่ผ่านมา #ครึกครื้นหนักมาก ลูกค้าสนใจกันเพียบ ❤️❤️ หอบหิ้วถุงเพียวเฟสกันยกใหญ่ #สวยท้าแดดกันทั่วบ้านทั่วเมืองแล้วค่ะ ☀️☀️'
					);

				break;
		}

		return $response;
	}

}
