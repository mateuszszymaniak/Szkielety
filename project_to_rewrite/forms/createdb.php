<?php
require 'dbcore.php';
$db_name = "CREATE DATABASE IF NOT EXISTS $dbname";
$conn = mysqli_connect($server, $username, $password);
if(!$conn){
    die("Nie można połączyć się z bazą:" .mysqli_connect_error());
}

if (mysqli_query($conn, $db_name)) {
    mysqli_query($conn, "CREATE TABLE `$dbname`.`blood_banks` ( `ID` INT(11) NOT NULL AUTO_INCREMENT , `bbname` VARCHAR(100) NOT NULL , `bbcity` VARCHAR(50) NOT NULL , `bbtel` VARCHAR(9) NOT NULL , `bbemail` VARCHAR(100) NOT NULL , `bbpass` VARCHAR(60) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;");
    mysqli_query($conn, "CREATE TABLE `$dbname`.`donors` ( `ID` INT(11) NOT NULL AUTO_INCREMENT , `donname` VARCHAR(100) NOT NULL , `blood_type` VARCHAR(3) NOT NULL , `doncity` VARCHAR(50) NOT NULL , `dontel` VARCHAR(9) NOT NULL , `donemail` VARCHAR(100) NOT NULL , `donpass` VARCHAR(60) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;");
    mysqli_query($conn, "CREATE TABLE `$dbname`.`donations` ( `ID` INT(11) NOT NULL AUTO_INCREMENT , `bbname` VARCHAR(100) NOT NULL , `bbcity` VARCHAR(50) NOT NULL , `bbtel` VARCHAR(9) NOT NULL , `bbemail` VARCHAR(100) NOT NULL , `donname` VARCHAR(100) NOT NULL , `blood_type` VARCHAR(3) NOT NULL , `doncity` VARCHAR(50) NOT NULL , `dontel` VARCHAR(9) NOT NULL , `donemail` VARCHAR(100) NOT NULL ,`dondate` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`ID`)) ENGINE = InnoDB;");
} else {
  echo "Error creating database: " . mysqli_error($conn);
}
?>