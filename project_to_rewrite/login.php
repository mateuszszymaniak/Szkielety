<?php
session_start();
if(isset($_SESSION['bbemail']) || isset($_SESSION['donemail'])){
  require 'block.php';
} else {
?>
<!DOCTYPE html>
<html>
    <?php $title="Login";
    require 'head.php'; ?>
    <body>
        <?php require 'header.php'?>
        <div class="container cont">
            <?php require 'msg.php'; ?>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-5 col-sm-6 col-xs-7 mb-5">
                    <div class="card rounded">
                        <ul class="nav nav-tabs justify-content-center bg-light" style="padding: 20px;">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#blood_bank">Bank krwi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#donor">Dawca</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane container active" id="blood_bank">
                                <form action="forms/bbLogin.php" method="post">
                                    <label class="text-muted font-weight-bold">Email banku krwi</label>
                                    <input type="email" name="bbemail" placeholder="Email banku krwi" class="form-control mb-4">
                                    <label class="text-muted font-weight-bold">Hasło banku krwi</label>
                                    <input type="password" name="bbpass" placeholder="Hasło banku krwi" class="form-control mb-4">
                                    <input type="submit" name="bblogin" value="Zaloguj się" class="btn btn-primary btn-block mb-4">
                                </form>
                            </div>
                            <div class="tab-pane container fade" id="donor">
                            <form action="forms/donLogin.php" method="post">
                                <label class="text-muted font-weight-bold">Email dawcy</label>
                                <input type="email" name="donemail" placeholder="Email dawcy" class="form-control mb-4">
                                <label class="text-muted font-weight-bold">Hasło dawcy</label>
                                <input type="password" name="donpass" placeholder="Hasło dawcy" class="form-control mb-4">
                                <input type="submit" name="donlogin" value="Zaloguj się" class="btn btn-primary btn-block mb-4">
                            </form>
                            </div>
                        </div>
                          <a href="register.php" class="text-center mb-4">Nie masz konta?</a>
                    </div>
                </div>
            </div>
        </div>
        <?php require 'footer.php';?>
    </body>
</html>
<?php } ?>