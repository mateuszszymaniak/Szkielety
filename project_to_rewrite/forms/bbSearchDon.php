<?php 
session_start();
require 'dbconnection.php';
if(isset($_POST['searchDon'])){
    $bbemail = $_SESSION['bbemail'];
    $pactel = $_POST['pactel'];
    $bbsql = "SELECT bbname, bbcity, bbtel, bbemail FROM blood_banks WHERE bbemail LIKE '$bbemail'";
    $bbresult = mysqli_query($conn, $bbsql);
    $bbrow = mysqli_fetch_assoc($bbresult);
    
    $bbname = $bbrow['bbname'];
    $bbcity = $bbrow['bbcity'];
    $bbtel = $bbrow['bbtel'];

    $donsql = "SELECT donname, blood_type, doncity, dontel, donemail FROM donors WHERE dontel LIKE '$pactel'";
    $donresult = mysqli_query($conn, $donsql);
    $donrow = mysqli_fetch_assoc($donresult);

    $doncountsql = "SELECT MAX(ID) FROM donations";
    $doncount = mysqli_query($conn, $doncountsql);
    $doncountrow = mysqli_fetch_assoc($doncount);
    $donnumb = intval($doncountrow)+1;
    
    $donname = $donrow['donname'];
    $donblood = $donrow['blood_type'];
    $doncity = $donrow['doncity'];
    $dontel = $donrow['dontel'];
    $donemail = $donrow['donemail'];

    $sql = "INSERT INTO donations (bbname, bbcity, bbtel, bbemail, donname, blood_type, doncity, dontel, donemail)
            VALUES ('$bbname', '$bbcity', '$bbtel', '$bbemail', '$donname', '$donblood', '$doncity', '$dontel', '$donemail');";
    $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
    $msg = "Donacja pacjenta '$donname' została dodana.";
    header("location:../bbPage.php?msg=".$msg);
}   
?>