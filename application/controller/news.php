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
			'0' => array( 'id' => 3, 'title' => 'TOP BRAND AWARDS 2016' , 'image' => URL . '/images/news/top_brand_awards_01.jpg', "date" => '03&nbsp;SEPTEMBER&nbsp;2016' ),
			'1' => array( 'id' => 2, 'title' => 'ASIA BEAUTY & COSMETIC EXPO 2016' , 'image' => URL . '/images/news/asia_beauty_cosmetic_expo_01.jpg', "date" => '28&nbsp;APRIL&nbsp;2016' ),
			'2' => array( 'id' => 1, 'title' => 'ทริปพาตัวแทนJellys (เจลลี่) เที่ยวญี่ปุ่น วันที่ 21-26 มกราคม 2559' , 'image' => URL . '/images/news/japan_trip_01.jpg', "date" => '28&nbsp;APRIL&nbsp;2016' )
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
		}

		return $response;
	}

}
