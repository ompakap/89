<?php

class Model
{
    /**
     * @param object $db A PDO database connection
     */
    function __construct($db)
    {
        try {
            $this->db = $db;
        } catch (PDOException $e) {
            exit('Database connection could not be established.');
        }
    }

	public function chkLogin($param)
    {
		$Login = array();

        $sql = " SELECT * FROM users WHERE username=:uname AND password=:upass LIMIT 1 ";
        $query = $this->db->prepare($sql);
        $parameters = array(
			':uname' => $param["uname"],
			':upass' => $param["upass"]
		);

        // echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();

        $query->execute($parameters);
		$count = $query->rowCount();

		if( $count > 0 )
		{
			$Login = $query->fetch(PDO::FETCH_ASSOC);
			$Login["count"] = $count;

			$_SESSION['LOGINS'] = 1;
			$_SESSION['LOGININFO'] = $Login;
			$_SESSION['USERNAME'] = $Login['username'] . ' ' . $Login['lastname'];
		}

		return $Login;
    }

	public function getProductList()
	{
		$sql = " SELECT * FROM product ";
        $query = $this->db->prepare($sql);

		$query->execute();

		return $query->fetchAll(PDO::FETCH_ASSOC);
	}

	public function getProductDetail($code)
	{
		$sql = " SELECT GROUP_CONCAT(u.file_name) as files , p.*
					FROM product p left join upload_data u on prod_id = p.code_product
					WHERE p.code_product = :code  ";
        $query = $this->db->prepare($sql);
		$parameters = array(
			':code' => $code
		);

        // echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();

        $query->execute($parameters);

		return $query->fetch(PDO::FETCH_ASSOC);
	}
	
	public function gen_continue_product()
	{
		$sql = " select count(*) as maxs FROM product_serials WHERE code_product = '".$_POST['prod_id']."' ";
		$query = $this->db->prepare($sql);
		$query->execute();

		$count = $query->fetch(PDO::FETCH_ASSOC);
			
		$max = $_POST['max_product'];
		$i = 0;
		$ci = $count['maxs'] + 1;
		$chuck = ceil($max / 20);
		$vsql = '';

		while( $i <= $max )
		{
			$code = md5( $ci . $_POST['prod_id'] );
			//$code = substr($code, 0, 13);
			
			$vsql .= "( '".$_POST['prod_id']."', '".$code."' ),";

			if( ($i % $chuck) == 0 || $i == $max )
			{
				$sql = 'INSERT INTO product_serials( code_product, code_serial ) VALUES ';
				$strSQL = $sql . substr($vsql, 0, -1);
			
				$query = $this->db->prepare($strSQL);
				$query->execute();
				$vsql = '';
			}
			
			$ci++;
			$i++;
		}

		/*
		$handle = fopen('gencode.sql','w');
		fwrite($handle, $sql);
		fclose($handle);

		echo $command = "mysql -u ".DB_USER." -p ".DB_PASS." ".DB_NAME." < gencode.sql ";

		exec($command);
		*/
	}

	public function generateProductCode($id, $stocks)
	{
		$sql = " DELETE FROM product_serials WHERE code_product = '".$id."' ";
		$query = $this->db->prepare($sql);
		$query->execute();

		$max = $stocks;
		$i = 1;
		$chuck = ceil($max / 20);
		$vsql = '';

		while( $i <= $max )
		{
			$code = md5($i.$id);
			$code = substr($code, 0, 13);
			
			$vsql .= "( '".$id."', '".$code."' ),";

			if( ($i % $chuck) == 0 || $i == $max )
			{
				$sql = 'INSERT INTO product_serials( code_product, code_serial ) VALUES ';
				$strSQL = $sql . substr($vsql, 0, -1);
				$query = $this->db->prepare($strSQL);
				$query->execute();
				$vsql = '';
			}
			
			$i++;
		}

		/*
		$handle = fopen('gencode.sql','w');
		fwrite($handle, $sql);
		fclose($handle);

		echo $command = "mysql -u ".DB_USER." -p ".DB_PASS." ".DB_NAME." < gencode.sql ";

		exec($command);
		*/
	}

	public function generateProduct89Code($id, $stocks)
	{
		$sql = " DELETE FROM product89_serials WHERE code_product = '".$id."' ";
		$query = $this->db->prepare($sql);
		$query->execute();

		$max = $stocks;
		$i = 1;
		$chuck = ceil($max / 20);
		$vsql = '';

		while( $i <= $max )
		{
			$code = md5($i.$id);
			$code = substr($code, 0, 13);
			
			$vsql .= "( '".$id."', '".$code."' ),";

			if( ($i % $chuck) == 0 || $i == $max )
			{
				$sql = 'INSERT INTO product_serials( code_product, code_serial ) VALUES ';
				$strSQL = $sql . substr($vsql, 0, -1);
				$query = $this->db->prepare($strSQL);
				$query->execute();
				$vsql = '';
			}
			
			$i++;
		}

		/*
		$handle = fopen('gencode.sql','w');
		fwrite($handle, $sql);
		fclose($handle);

		echo $command = "mysql -u ".DB_USER." -p ".DB_PASS." ".DB_NAME." < gencode.sql ";

		exec($command);
		*/
	}
	
	public function deleteGenProduct($param)
	{
		$res = array();
		$sql = " DELETE FROM product_serials WHERE code_product = '".$param["id"]."' ";
		$query = $this->db->prepare($sql);
		
		if( $query->execute() )
		{
			/*
			$sql = " UPDATE product SET stocks = '0' WHERE code_product = '".$param["code"]."' ";
			$query = $this->db->prepare($sql);
			
			$query->execute();
			*/
			$res["SUCCESS"] = true;
		}
		else
		{
			$res["SUCCESS"] = false;
		}

		return $res;
	}

	public function getProductGenCode($id)
	{
		$sql = " SELECT * FROM product WHERE id = :id ";
        $query = $this->db->prepare($sql);
		$parameters = array(
			':id' => $id
		);

        // echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();

        $query->execute($parameters);

		return $query->fetch(PDO::FETCH_ASSOC);
	}

	public function checkSerialCode($id)
	{
		ini_set('memory_limit', '750M');
		$sql = " SELECT * FROM product_serials WHERE code_product = :id ";
        $query = $this->db->prepare($sql);
		$parameters = array(
			':id' => $id
		);

        // echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();

        $query->execute($parameters);

		return $query->fetchAll(PDO::FETCH_ASSOC);
	}

	public function contSerial($code)
	{
		$sql = " SELECT count(id) as cnt FROM product_serials WHERE code_product = :code ";
        $query = $this->db->prepare($sql);
		$parameters = array(
			':code' => $code
		);

        // echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();

        $query->execute($parameters);

		return $query->fetch(PDO::FETCH_ASSOC);
	}

	public function newProduct($param)
	{
		$res = array();

		$sql = " INSERT INTO product( code_product, name_th, name_en, weights, costs, stocks, details, detail_th, timep, types) VALUES( :code_product, :name_th, :name_en, :weights, :costs, :stocks, :details, :detail_th, :timep, '001')";
        $query = $this->db->prepare($sql);

		$code = $this->genCode("prod");

        $parameters = array(
			':code_product' => $code,
			':name_th' => $param["txtname_th"],
			':name_en' => $param["txtname_en"],
			':weights' => $param["txtweights"],
			':costs' => $param["txtcosts"],
			':stocks' => $param["txtstocks"],
			':details' => $param["txtdetails"],
			':detail_th' => $param["txtdetail_th"],
			':timep' => date("d-M-y H.i.s")
		);

		//echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();
        if( $query->execute($parameters) )
		{
			$sql = " SELECT id FROM product WHERE code_product = :code ";
			$query = $this->db->prepare($sql);
			$parameters = array( ':code' => $code );
			$query->execute($parameters);
			$prod = $query->fetch(PDO::FETCH_ASSOC);
			
			foreach( $param["fcontent"] as $cont )
			{
				$sql = " INSERT INTO upload_data( file_name, times, prod_id, name_title) VALUES( :file_name, :times, :prod_id, :name_title )";
				$query = $this->db->prepare($sql);
				$parameters = array(
					':file_name' => $cont,
					':times' => date("d-M-y H.i.s"),
					':prod_id' => $code,
					':name_title' => $param["txtname_en"]
				);
				
				$query->execute($parameters);
			}

			$res["SUCCESS"] = true;
			$res["code"] = $code;
		}
		else
		{
			$res["SUCCESS"] = false;
		}

		return $res;
	}

	public function updateProduct($param)
	{
		$res = array();

		$sql = " UPDATE product SET
					name_th = :name_th,
					name_en = :name_en,
					weights = :weights,
					costs = :costs,
					stocks = :stocks,
					detail_en = :detail_en,
					detail_th = :detail_th
					WHERE code_product = :code_product ";
        $query = $this->db->prepare($sql);

        $parameters = array(
			':code_product' => $param["code"],
			':name_th' => $param["txtname_th"],
			':name_en' => $param["txtname_en"],
			':weights' => $param["txtweights"],
			':costs' => $param["txtcosts"],
			':stocks' => $param["txtstocks"],
			':detail_en' => $param["txtdetails"],
			':detail_th' => $param["txtdetail_th"]
		);

		//echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();

        if( $query->execute($parameters) )
		{
			if( !empty($param["fcontent"]) )
			{
				$sql = " DELETE FROM upload_data WHERE prod_id = :id ";
				$query = $this->db->prepare($sql);
				$parameters = array( ':id' => $param["code"] );
				$query->execute($parameters);
				
				foreach( $param["fcontent"] as $cont )
				{
					$sql = " INSERT INTO upload_data( file_name, times, prod_id, name_title) VALUES( :file_name, :times, :prod_id, :name_title )";
					$query = $this->db->prepare($sql);
					$parameters = array(
						':file_name' => $cont,
						':times' => date("d-M-y H.i.s"),
						':prod_id' => $param["code"],
						':name_title' => $param["txtname_en"]
					);
					
					$query->execute($parameters);
				}
			}

			$res["SUCCESS"] = true;
			$res["code"] = $param["code"];
		}
		else
		{
			$res["SUCCESS"] = false;
		}

		return $res;
	}
	
	public function deleteProduct($param)
	{
		$res = array();
		
		$sql = " SELECT code_product FROM product WHERE id = :id ";
		$query = $this->db->prepare($sql);
		$parameters = array( ":id" => $param["id"] );
		$query->execute($parameters);
		$prod = $query->fetch(PDO::FETCH_ASSOC);

		$sql = 'DELETE FROM product WHERE id = :id ';

		$query = $this->db->prepare($sql);
		$parameters = array( ":id" => $param["id"] );
        
		if( $query->execute($parameters) )
		{
			$sql = " SELECT GROUP_CONCAT(file_name) as file_name FROM upload_data WHERE prod_id = :id ";
			$query = $this->db->prepare($sql);
			$parameters = array( ":id" => $prod["code_product"] );
			$query->execute($parameters);
			$file = $query->fetch(PDO::FETCH_ASSOC);

			$sql = 'DELETE FROM upload_data WHERE prod_id = :id ';
			$query = $this->db->prepare($sql);
			$parameters = array( ":id" => $prod["code_product"] );
			$query->execute($parameters);
			
			if( isset($file["file_name"]) && !empty($file["file_name"]) )
			{
				$file = explode(",", $file["file_name"]);
				foreach( $file as $i => $f )
				{
					if( file_exists('../../images/upload/' . $f) )
					{
						unlink('../../images/upload/' . $f);
					}
				}
			}

			$res["SUCCESS"] = true;
		}
		else
		{
			$res["SUCCESS"] = false;
		}

		return $res;
	}

	public function genCode($t)
	{
		switch($t)
		{
			case 'prod' : $table = 'product';  break;
		}
	
		$sql = 'SELECT MAX(code_'.$table.') as id FROM '.$table;

		$query = $this->db->prepare($sql);
		$query->execute();
        
		$tb = $query->fetch();
		if( $tb )
		{
			if( !empty($tb->id) )
			{
				$last = (int)$tb->id;
			}
		}

		$code = str_pad(($last+1),3,"0",STR_PAD_LEFT);


		return $code;
	}

	public function chk_serial($pos)
	{
		$r = array("FAKE" => true);

		$sql = "SELECT count(ps.code_product) as ctn, p.name_eng as name FROM product_serials ps, product p WHERE p.id = ps.code_product AND ps.code_product= :id and ps.code_serial= :serials "; 
		$query = $this->db->prepare($sql);

		$parameters = array(
			":id" => $pos["pid"],
			":serials" => $pos["pdata"]
		);

		$query->execute($parameters);
		$chk = $query->fetch(PDO::FETCH_ASSOC);

		if( $chk["ctn"] > 0 )
		{
			$r["FAKE"] = false;
			$r["PRODNAME"]  = $chk["name"];
		}

		return $r;
	}

	public function chk_serial_all($pos)
	{
		$r = array(
			"FAKE" => true,
			"DUP" => false
		);

		$sql = "SELECT count(ps.code_product) as ctn, p.name_en as name, ps.id as cid, ps.dupflag FROM product_serials ps, product p WHERE p.id = ps.code_product AND ps.code_serial= :serials "; 
		$query = $this->db->prepare($sql);

		$parameters = array(
			":serials" => $pos["pdata"]
		);
		// echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();
		$query->execute($parameters);
		$chk = $query->fetch(PDO::FETCH_ASSOC);

		if( $chk["dupflag"] > 1 )
		{
			$r["DUP"] = true;
			$r["FAKE"] = false;
		}
		elseif( $chk["ctn"] > 0 )
		{
			$r["FAKE"] = false;
			$r["PRODNAME"]  = $chk["name"];

			$sql = " UPDATE product_serials SET dupflag = '".($chk["dupflag"]+1)."' WHERE id='".$chk["cid"]."' ";
			$query = $this->db->prepare($sql);
			$query->execute($parameters);
		}

		return $r;
	}

}	

