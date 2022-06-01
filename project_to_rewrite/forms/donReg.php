<?php
if(isset($_POST['donregister'])){
    require 'dbconnection.php';
    $errors = "";
    if(!empty($_POST['donname'])){
        $donname = ucwords(strtolower(trim(htmlspecialchars($_POST['donname']))));
        $donname = filter_var($donname, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/[a-zA-Z]{1,}\s?[a-zA-Z]{1,}/")));
        if($donname === false){
            $errors .= "dane dawcy ";
        }
    } else {
        $errors .= "dane dawcy ";
    }
    
    $bt = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0+', '0-'];
    if(!empty($_POST['blood_type'])){
        $blood_type = trim(htmlspecialchars($_POST['blood_type']));
        if(!in_array($blood_type, $bt)){
            $errors .= "grupa krwi ";
        }
    } else {
        $errors .= "grupa krwi ";
    }

    if(!empty($_POST['doncity'])){
        $doncity = ucwords(strtolower(trim(htmlspecialchars($_POST['doncity']))));
        $doncity = filter_var($doncity, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/[a-zA-Z]{1,}\s?[a-zA-Z]{0,}/")));
        if($doncity === false){
            $errors .= "miejscowość ";
        }
    } else {
        $errors .= "miejscowość ";
    }

    if(!empty($_POST['dontel'])){
        $dontel = trim(htmlspecialchars($_POST['dontel']));
        $dontel = filter_var($dontel, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/[0-9]{9}/")));
        if($dontel === false){
            $errors .= "telefon ";
        }
    } else {
        $errors .= "telefon ";
    }

    if(!empty($_POST['donemail'])){
        $donemail = strtolower(trim(htmlspecialchars($_POST['donemail'])));
        $donemail = filter_var($donemail, FILTER_VALIDATE_EMAIL);
        if($donemail === false){
            $errors .= "email ";
        }
    } else {
        $errors .= "email ";
    }

    if(!empty($_POST['donpass'])){
        $donpass = trim(htmlspecialchars($_POST['donpass']));
        $donpass = filter_var($donpass, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/")));
        if($donpass === false){
            $errors .= "hasło";
        } else {
            $donpass = password_hash($donpass, PASSWORD_DEFAULT);
        }
    } else {
        $errors .= "hasło";
    }

    if($errors !== ""){
        $msg = "Podano nieprawidłowo dane: " . $errors ."!";
        header("location:../register.php?error=".$msg);
    } else {
        $check_email = mysqli_query($conn, "SELECT donemail FROM donors WHERE donemail = '$donemail'");
        if(mysqli_num_rows($check_email) > 0){
            $error = "Podany email już istnieje. Spóbuj wpisać inny adres mailowy.";
            header("location:../register.php?error=".$error);
        } else {
            $sql = "INSERT INTO donors (donname, blood_type, doncity, dontel, donemail, donpass)
            VALUES ('$donname', '$blood_type', '$doncity', '$dontel', '$donemail', '$donpass')";
            if($conn->query($sql) === TRUE){
                $msg = "Rejestracja zakończona pomyślnie. Zaloguj się, aby kontynuować.";
                header("location:../login.php?msg=".$msg);
            } else {
                $error = "Error: " .$sql. "<br>" .$conn->error;
            }
            $conn->close();
        }
    }
}
?>