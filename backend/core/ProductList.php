<?php
include './product.php';
include './Validator.php';



class ProductList
{
    public static function show()
    {
        echo json_encode((new Product)->getAll());
    }

    public static function add(array $inputs): void 
    {
        $validator = new Validator($inputs);
    }

    public static function delete(array $data)
    {
        foreach ($data as $value) {
            (new Product)->delete('sku', $value);
        }

        return response(array('status' => 'success', 'message' => 'Deleted count of products: '.count($data)));
    }   

};
 