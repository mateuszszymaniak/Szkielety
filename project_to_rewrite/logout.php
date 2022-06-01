<?php
    session_start();
    session_unset();
    session_destroy();
    $msg="Wylogowano pomyslnie";
    header("location:index.php?msg=".$msg );
?>