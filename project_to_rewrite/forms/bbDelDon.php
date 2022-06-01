<?php
session_start();
require 'dbconnection.php';
    $ID = $_POST['delDon'];
    $sql_data = "SELECT donname FROM donations WHERE ID = '$ID'";
    $data_result = mysqli_query($conn, $sql_data) or die(mysqli_error($conn));
    $row = mysqli_fetch_assoc($data_result);
    $donname = $row['donname'];
    $msg = "Donacja pacjenta '$donname' została usunięta.";
    $sql = "DELETE FROM donations WHERE ID = '$ID'";
    $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
    header("location:../bbPage.php?msg=".$msg);
?>