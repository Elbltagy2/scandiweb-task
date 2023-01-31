<?php

class Database
{
    private $connection;

    function __construct()
    {
       $servername = "localhost";
        $username = "root";
        $password = "";
        $databasename="scandiwebtask";

        // Create connection
        $conn = new mysqli($servername, $username, $password,$databasename);

        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        //echo "Connected successfully";
      $this->connection="Connected successfully";

            }

    public function get()
    {
        return $this->connection;
    }
    
     
};


