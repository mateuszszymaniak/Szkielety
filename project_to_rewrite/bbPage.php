<?php
session_start();
if(isset($_SESSION['donemail'])){
    require 'block.php';
} else {
    require 'forms/dbconnection.php';
    $bbemail = $_SESSION['bbemail'];
    $sql = "SELECT * FROM donations WHERE bbemail LIKE '".$bbemail."'";
    $result = mysqli_query($conn, $sql);
    $counter = 0;
?>

<!DOCTYPE html>
<html>
    <?php $title="Panel banku krwi";
    require "head.php"; ?>
    <body>
        <?php require 'header.php';?>
        <div class="container cont"> 
            <?php require 'msg.php'; ?>
            <div>
                <?php
                if ($result){
                    $row = mysqli_num_rows($result);                    
                    if(!$row){ 
                        echo 'Brak danych.';
                    } else {
            ?>
            </div>
            <table class="table table-responsive table-striped rounded mb-5">
                <tr><th colspan="8">Pobrana krew od dawców</th></tr>
                <tr>
                    <th>Numer donacji</th>
                    <th>Imię i nazwisko dawcy</th>
                    <th>Grupa krwi dawcy</th>
                    <th>Numer telefonu dawcy</th>
                    <th>Miejsowość dawcy</th>
                    <th>Adres email dawcy</th>
                    <th colspan="2">Akcja</th>
                </tr>
                <?php while($row = mysqli_fetch_assoc($result)){ ?>
                <tr>
                    <td><?php echo ++$counter;?></td>
                    <td><?php echo $row['donname'];?></td>
                    <td><?php echo $row['blood_type'];?></td>
                    <td><?php echo $row['dontel'];?></td>
                    <td><?php echo $row['doncity'];?></td>
                    <td><?php echo $row['donemail'];?></td>
                    <td>
                        <form action="bbEditDon.php" method="post">
                            <button type="submit" name="editDon" value="<?php echo $row['ID'];?>" class="btn btn-success">Edytuj</button>
                        </form>
                    </td>
                    <td>
                        <form action="forms/bbDelDon.php" method="post">
                            <button type="submit" name="delDon" value="<?php echo $row['ID'];?>" class="btn btn-danger">Usuń</button>
                        </form>
                    </td>
                </tr>
            <?php } ?>
            </table>
        </div>
        <br><br>
        <?php }} ?>
        <?php require 'footer.php'?>
    </body>
</html>
<?php } ?>