<?php

class Router 
{
    private $path = array();

    public function get(string $path, string $controller): void
    {
        array_push($this->path, array($path, $controller, 'get'));
    }

    public function post(string $path, string $controller): void
    {
        array_push($this->path, array($path, $controller, 'post'));
    }

   
};