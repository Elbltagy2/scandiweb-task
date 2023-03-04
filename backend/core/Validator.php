<?php
include './Validate.php';
include'./Products/Book.php';
include'./Products/Disk.php';
include'./Products/Furniture.php';



class Validator
{
    private $inputs;
    private $message = null;

    function __construct(array $inputs)
    {
        $this->inputs = $inputs;
        $producttype=ucfirst($this->inputs['type']);
        $this->validate(new  $producttype($this->inputs));
    }

    public function validate(Validate $validate)
    {
        if(!$validate->validateSKU())
            $this->message .= 'Invalid SKU or already exists <br>';
        if(!$validate->validateName())
            $this->message .= 'Invalid name <br>';
        if($validate->validatePrice())
            $this->message .= 'Invalid price <br>';
        if(!$validate->validateAttributes())
            $this->message .= 'Invalid attributes <br>';

        if($this->message == null)
        {
            $validate->save();
            echo json_encode(array('status' => 'success', 'message' => 'Product added to the database'));
        }   
       else{

       echo json_encode(array('status' => 'danger', 'message' => $this->message));}
    }
};
