<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json');
include './ProductList.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 // $send = json_decode($_POST['send'],true);
  $user = json_decode( file_get_contents('php://input'),true );
  //print_r(json_encode($user));

  // process the data received from the React component
  (new ProductList) -> delete($user);
  exit;
}

echo json_encode(array('failed' => false));
exit;