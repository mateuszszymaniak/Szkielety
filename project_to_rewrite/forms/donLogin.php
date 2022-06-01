<?php
session_start();
require 'dbconnection.php';
if(isset($_POST['donlogin'])){
    $donemail = $_POST['donemail'];
    $donpass = $_POST['donpass'];
    $sql = "SELECT * FROM donors WHERE donemail = '$donemail'";
    $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
    $row = mysqli_fetch_array($result);
    if(password_verify($donpass, $row['donpass'])){
        $_SESSION['donemail'] = $row['donemail'];
        $_SESSION['donname'] = $row['donname'];
        $_SESSION['blood_type'] = $row['blood_type'];
        $msg = $_SESSION['donname']." został zalogowany.";
        header("location:../donorPage.php?msg=".$msg);
    } else {
        $error = "Podano zły email lub hasło. Spróbuj ponownie.";
        header("location:../login.php?error=".$error);
    }
}
?>