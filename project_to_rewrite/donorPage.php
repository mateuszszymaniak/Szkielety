<?php
session_start();
if(isset($_SESSION['bbemail'])){
    require 'block.php';
} else {
    require 'forms/dbconnection.php';
    $donemail = $_SESSION['donemail'];
    $blood_type = $_SESSION['blood_type'];
    $sql = "SELECT * FROM donations WHERE donemail LIKE '".$donemail."'";
    $result = mysqli_query($conn, $sql);
    $counter = 0;
?>

<!DOCTYPE html>
<html>
<?php $title="Panel dawcy";
    require "head.php"; ?>
    <body>
        <?php require 'header.php';?>
        <div class="container cont"> 
            <?php require 'msg.php'; ?>
            <?php
            if ($result){
                $row = mysqli_num_rows($result);                    
                if(!$row){ 
                    echo 'Brak danych.';              
                } else {
            ?>
            <table class="table table-responsive table-striped rounded mb-5">
                <tr><th colspan="6">Donacje Twojej grupy krwi <?php echo $blood_type;?></th></tr>
                <tr>
                    <th>Numer donacji</th>
                    <th>Data donacji</th>
                    <th>Nazwa banku krwi</th>
                    <th>Telefon do banku krwi</th>
                    <th>Miejsowość banku krwi</th>
                    <th>Adres email banku krwi</th>
                </tr>
            <?php while($row = mysqli_fetch_array($result)){ ?>
                <tr>
                    <td><?php echo ++$counter;?></td>
                    <td><?php echo $row['dondate'];?></td>
                    <td><?php echo $row['bbname'];?></td>
                    <td><?php echo $row['bbtel'];?></td>
                    <td><?php echo $row['bbcity'];?></td>
                    <td><?php echo $row['bbemail'];?></td>
                </tr>
            <?php }}} ?>
            </table>
        </div>
        <br>
        <?php require 'footer.php'; ?>
    </body>
</html>
<?php } ?>