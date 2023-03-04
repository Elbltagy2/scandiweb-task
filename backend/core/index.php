<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: *");

header('Content-Type: application/json');

//$input = json_decode(file_get_contents('php://input'), true);

// Process the request data and return a response
//echo json_encode($response);

include './ProductList.php';
 $method = $_SERVER['REQUEST_METHOD'];
$user = json_decode( file_get_contents('php://input'),true );



if($method=="POST"){
//echo json_encode($user["0"]["name"]);
 (new ProductList) -> add (array("sku"=>$user["0"]["sku"],
 "name"=>$user["0"]["name"],"price"=>$user["0"]["price"],
 "type"=>$user["0"]["type"],"size"=>$user["1"]["size"]
,"width"=>$user["1"]["width"],"length"=>$user["1"]["length"],
"height"=>$user["1"]["height"],"weight"=>$user["1"]["weight"]));
 }
if ($method=="GET"){
    (new ProductList) -> show();}






