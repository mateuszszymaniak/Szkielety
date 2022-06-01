<?php
require 'dbcore.php';
$conn = new mysqli($server, $username, $password, $dbname);
if(!$conn){
    die("Nie można połączyć się z bazą:" .mysqli_connect_error());
}
?>