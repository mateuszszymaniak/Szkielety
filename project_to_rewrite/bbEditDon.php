<?php
session_start();
if(isset($_SESSION['donemail'])){
    require 'block.php';
} else {
    require 'forms/dbconnection.php';
    $bbemail = $_SESSION['bbemail'];
    $id = $_POST['editDon'];
    $sql = "SELECT * FROM donations WHERE ID = '".$id."'";
    $result = mysqli_query($conn, $sql);
    $counter = 0;
    $row = mysqli_fetch_array($result);
    $donname = $row['donname'];
    $blood_type = $row['blood_type'];
    $dontel = $row['dontel'];
    $doncity = $row['doncity'];
    $donemail = $row['donemail'];
    $_SESSION['donemail_org'] = $donemail;
    $_SESSION['donname_org'] = $donname;
?>

<!DOCTYPE html>
<html>
    <?php $title = "Edycja wpisu";
    require "head.php"; ?>
    <body>
        <?php require 'header.php';?>
        <div class="container cont"> 
            <?php require 'msg.php'; ?>
            <table class="table table-responsive table-striped rounded mb-5">
                <tr><th colspan="5">Edycja krwi od dawcy</th></tr>
                <tr>
                    <th>Imię i nazwisko dawcy</th>
                    <th>Grupa krwi dawcy</th>
                    <th>Numer telefonu dawcy</th>
                    <th>Miejsowość dawcy</th>
                    <th>Adres email dawcy</th>
                </tr>
                <?php if($row){ ?>
                <tr>
                    <td><?php echo $donname;?></td>
                    <td><?php echo $blood_type;?></td>                
                    <td><?php echo $dontel;?></td>
                    <td><?php echo $doncity;?></td>
                    <td><?php echo $donemail;?></td> 
                </tr>
                <?php } ?>
            </table>

            <table class="table table-responsive table-striped rounded mb-5">
            <tr><th colspan="5">Nowe dane krwi od dawcy</th></tr>
            <tr>
                <th>Imię i nazwisko dawcy</th>
                <th>Grupa krwi dawcy</th>
                <th>Numer telefonu dawcy</th>
                <th>Miejsowość dawcy</th>
                <th>Adres email dawcy</th>
            </tr>
            <tr>
                <form action="forms/bbDonUpdate.php" method="post">
                    <td><input type="text" name="donname" value="<?php echo $donname;?>" required disabled></th>
                    <td><input name="blood_type" value="<?php echo $blood_type?>" required disabled></th>
                    <td><input type="text" name="dontel_e" value="<?php echo $dontel?>" required pattern="[0-9]{9}"></th> 
                    <td><input type="text" name="doncity_e" value="<?php echo $doncity?>" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{0,}"></th>
                    <td><input type="text" name="donemail" value="<?php echo $donemail?>" required disabled></th>
            </tr>
            </table>
            <br>
            <a href="forms/bbDonUpdate.php"><input type="submit" name="donupdate" value="Zapisz zmiany" class="btn btn-success"></a>
                </form>
            <a href="bbPage.php"><input type="submit" name="reject" value="Anuluj" class="btn btn-danger"></a>
        </div>
    <br>
    <?php require 'footer.php';?>
    </body>
</html>
<?php }?>