<?php

/**
 * Class Error
 *
 * Please note:
 * Don't use the same name for class and method, as this might trigger an (unintended) __construct of the class.
 * This is really weird behaviour, but documented here: http://php.net/manual/en/language.oop5.decon.php
 *
 */
class Product extends Controller
{
    /**
     * PAGE: index
     * This method handles the error page that will be shown when a page is not found
     */
    public function index()
    {
		$_URL = URL . $_SESSION["Lang"] . "/";
		
		$list = $this->getproductlist();

        // load views
		$content = 'view/product/index.php';
        require APP . 'view/_templates/layout.php';
    }

	public function detail($page, $id)
    {
		$_URL = URL . $_SESSION["Lang"] . "/";
		
		//$list = $this->getproductlist();

        // load views
		$content = 'view/product/detail.php';
        require APP . 'view/_templates/layout.php';
    }

	public function getproductlist()
	{
		$_URL = URL . $_SESSION["Lang"] . "/";

		$response = array(
			'0' => array( 
				'id' => 1, 
				'name' => 'PURE CREAM' , 
				"detail" => '',
				'image' => URL . 'images/products/pure_cream_product01.png',
				'link' => $_URL . 'product/detail/1'
			),
			'1' => array( 
				'id' => 2, 
				'name' => 'PURE DD CREAM' , 
				"detail" => '',
				'image' => URL . 'images/products/pure_dd_cream_product01.png',
				'link' => $_URL . 'product/detail/2'
			),
			'2' => array( 
				'id' => 3, 
				'name' => 'PURE LOTION' , 
				"detail" => '',
				'image' => URL . 'images/products/pure_lotion_product01.png',
				'link' => $_URL . 'product/detail/3'
			),
			'3' => array( 
				'id' => 4, 
				'name' => 'PURE SOAP' , 
				"detail" => '',
				'image' => URL . 'images/products/pure_soap_product01.png',
				'link' => $_URL . 'product/detail/4'
			),
			'4' => array( 
				'id' => 5, 
				'name' => 'PURE UNDERARM CREAM' , 
				"detail" => '',
				'image' => URL . 'images/products/pure_underarm_cream_product01.png',
				'link' => $_URL . 'product/detail/5'
			)
		);

		return $response;
	}

    public function ajax_chkserial()
    {
        $res = $this->model->chk_serial($_POST);
        
        echo json_encode($res);
    }

    public function ajax_chkserial_all()
    {
        $res = $this->model->chk_serial_all($_POST);
        
        echo json_encode($res);
    }
}
