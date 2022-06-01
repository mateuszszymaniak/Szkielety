<?php
session_start();
require 'dbconnection.php';
if(isset($_POST['bblogin'])){
    $bbemail=$_POST['bbemail'];
    $bbpass=$_POST['bbpass'];
    $sql="SELECT * FROM blood_banks WHERE bbemail = '$bbemail'";
    $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
    $row = mysqli_fetch_array($result);
    if(password_verify($bbpass, $row['bbpass'])){
        $_SESSION['bbemail'] = $row['bbemail'];
        $_SESSION['bbname'] = $row['bbname'];
        $_SESSION['ID'] = $row['id'];
        $msg = $_SESSION['bbname']." został zalogowany.";
        header("location:../bbPage.php?msg=".$msg);
    } else {
        $error = "Podano zły email lub hasło. Spróbuj ponownie.";
        header("location:../login.php?error=".$error);
    }
}
?>