<?php
if(isset($_POST['bbregister'])){
    require 'dbconnection.php';
    $errors = "";
    if(!empty($_POST['bbname'])){
        $bbname = ucwords(strtolower(trim(htmlspecialchars($_POST['bbname']))));
        $bbname = filter_var($bbname, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/[a-zA-Z]{1,}\s?[a-zA-Z]{1,}/")));
        if($bbname === false){
            $errors .= "nazwa banku krwi ";
        }
    } else {
        $errors .= "nazwa banku krwi ";
    }

    if(!empty($_POST['bbcity'])){
        $bbcity = ucwords(strtolower(trim(htmlspecialchars($_POST['bbcity']))));
        $bbcity = filter_var($bbcity, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/[a-zA-Z]{1,}\s?[a-zA-Z]{0,}/")));
        if($bbcity === false){
            $errors .= "miejscowość ";
        }
    } else {
        $errors .= "miejscowość ";
    }

    if(!empty($_POST['bbtel'])){
        $bbtel = trim(htmlspecialchars($_POST['bbtel']));
        $bbtel = filter_var($bbtel, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/[0-9]{9}/")));
        if($bbtel === false){
            $errors .= "telefon ";
        }
    } else {
        $errors .= "telefon ";
    }

    if(!empty($_POST['bbemail'])){
        $bbemail = strtolower(trim(htmlspecialchars($_POST['bbemail'])));
        $bbemail = filter_var($bbemail, FILTER_VALIDATE_EMAIL);
        if($bbemail === false){
            $errors .= "email ";
        }
    } else {
        $errors .= "email ";
    }

    if(!empty($_POST['bbpass'])){
        $bbpass = trim(htmlspecialchars($_POST['bbpass']));
        $bbpass = filter_var($bbpass, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/")));
        if($bbpass === false){
            $errors .= "hasło";
        } else {
            $bbpass = password_hash($bbpass, PASSWORD_DEFAULT);
        }
    } else {
        $errors .= "hasło";
    }

    if($errors !== ""){
        $msg = "Podano nieprawidłowo dane: " . $errors ."!";
        header("location:../register.php?error=".$msg);
    } else {
        $check_email = mysqli_query($conn, "SELECT bbemail FROM blood_banks WHERE bbemail = '$bbemail'");
        if(mysqli_num_rows($check_email) > 0){
            $error = "Podany email już istnieje. Spóbuj wpisać inny adres mailowy.";
            header("location:../register.php?error=".$error);
        } else {
            $sql = "INSERT INTO blood_banks (bbname, bbcity, bbtel, bbemail, bbpass)
            VALUES ('$bbname', '$bbcity', '$bbtel', '$bbemail', '$bbpass')";
            if($conn -> query($sql) === TRUE){
                $msg = "Rejestracja zakończona pomyślnie. Zaloguj się, aby kontynuować.";
                header("location:../login.php?msg=".$msg);
            } else {
                $error = "Błąd: " .$sql. "<br>" .$conn->error;
            }
            $conn->close();
        }
    }
}
?>