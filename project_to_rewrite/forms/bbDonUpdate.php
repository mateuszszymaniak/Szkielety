<?php
session_start();
require 'dbconnection.php';
$errors = "";
if(isset($_POST['donupdate'])){
    $donemail_org = $_SESSION['donemail_org'];
    $donname = $_SESSION['donname_org'];
    
    if(!empty($_POST['dontel_e'])){
        $dontel_e = trim(htmlspecialchars($_POST['dontel_e']));
        $dontel_e = filter_var($dontel_e, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/[0-9]{9}/")));
        if($dontel_e === false){
            $errors .= "telefon ";
        }
    } else {
        $errors .= "telefon ";
    }

    if(!empty($_POST['doncity_e'])){
        $doncity_e = ucwords(trim(htmlspecialchars($_POST['doncity_e'])));
        $doncity_e = filter_var($doncity_e, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/[a-zA-Z]{1,}\s?[a-zA-Z]{0,}/")));
        if($doncity_e === false){
            $errors .= "miejscowość ";
        }
    } else {
        $errors .= "miejscowość ";
    }

    if($errors !== ""){
        $msg = "Podano nieprawidłowo dane: " . $errors ."!";
        header("location:../bbPage.php?error=".$msg);
    } else {
        $sql = "UPDATE donations SET dontel = '$dontel_e', doncity = '$doncity_e' WHERE donemail = '$donemail_org'";
        $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
        $msg = "Donacja pacjenta '$donname' została zaktualizowana.";
        header("location:../bbPage.php?msg=".$msg);
    }
}
?>