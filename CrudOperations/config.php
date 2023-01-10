<?php

$conn = mysqli_connect("localhost","root","Sakthi","studentcrud");

if(!$conn){
    die("Connction Failed" . mysqli_connect_error());
}

?>