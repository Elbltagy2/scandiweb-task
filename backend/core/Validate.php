<?php

interface Validate
{
    public function validateSKU();
    public function validateName();
    public function validatePrice();
    public function validateAttributes();
};