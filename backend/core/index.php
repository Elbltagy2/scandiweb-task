<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include './ProductList.php';
 $method = $_SERVER['REQUEST_METHOD'];
$user = json_decode( file_get_contents('php://input'),true );
//echo json_encode($method);


if($method=="POST"){
 (new ProductList) -> add (array("sku"=>$user["product"]["sku"],
 "name"=>$user["product"]["name"],"price"=>$user["product"]["price"],
 "type"=>$user["product"]["type"],"size"=>$user["additionalInput"]["size"],"size"=>$user["additionalInput"]["size"]
,"width"=>$user["additionalInput"]["width"],"length"=>$user["additionalInput"]["length"],
"height"=>$user["additionalInput"]["height"],"weight"=>$user["additionalInput"]["weight"]));
}
if ($method=="GET"){
(new ProductList) -> show();}
if ($method=="patch"){
    (new ProductList) -> delete();
}






