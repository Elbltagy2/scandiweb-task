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
        $this->connection = new mysqli($servername, $username, $password,$databasename);
        // Check connection
        $this->connection->set_charset('utf8mb4');
        if ($this->connection->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        

        

        //echo "Connected successfully";

            }

    public function get()
    {
        return $this->connection;
    }
    
     
};
new Database();


