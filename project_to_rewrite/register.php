<?php
session_start();
if(isset($_SESSION['bbemail']) || isset($_SESSION['donemail'])){
    require 'block.php';
} else {
?>
<!DOCTYPE html>
<html>
    <?php $title="Rejestracja";
    require "head.php"; ?>
    <body>
        <?php require "header.php"?>
        <div class="container cont">
            <?php require 'msg.php'; ?>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-5 col-sm-6 col-xs-7 mb-5">
                    <div class="card rounded">
                        <ul class="nav nav-tabs justify-content-center bg-light" style="padding: 20px">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#blood_bank">Bank krwi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#donor">Dawca</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane container active" id="blood_bank">
                                <form action="forms/bbReg.php" method="post">
                                    <label class="text-muted font-weight-bold">Nazwa Banku Krwi</label>
                                    <input type="text" title="Nazwa dwuczłonowa. Wpisz tylko litery" name="bbname" placeholder="Nazwa Banku Krwi" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{1,}">
                                    <label class="text-muted font-weight-bold">Miejscowość</label>
                                    <input type="text" title="Wpisz tylko litery" name="bbcity" placeholder="Miejscowość" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{0,}">
                                    <label class="text-muted font-weight-bold">Telefon</label>
                                    <input type="text" title="Wpisz tylko 9 cyfr bez spacji" name="bbtel" placeholder="Telefon" class="form-control mb-3" required pattern="[0-9]{9}">
                                    <label class="text-muted font-weight-bold">Email banku krwi</label>
                                    <input type="email" title="Wpisz adres mailowy" name="bbemail" placeholder="Email" class="form-control mb-3" required pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}">
                                    <label class="text-muted font-weight-bold">Hasło</label>
                                    <input type="password" title="Minimum 5 znaków, jedna duża litera, jedna mała, cyfra i znak specjalny" name="bbpass" placeholder="Hasło" class="form-control mb-3" required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$">
                                    <input type="submit" name="bbregister" value="Zarejestruj" class="btn btn-primary btn-block mb-4">
                                </form>
                            </div>
                            <div class="tab-pane container fade" id="donor">
                                <form action="forms/donReg.php" method="post">
                                    <label class="text-muted font-weight-bold">Imię i Nazwisko Dawcy</label>
                                    <input type="text" title="Nazwa dwuczłonowa. Wpisz tylko litery" name="donname" placeholder="Imię i Nazwisko Dawcy" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{1,}">
                                    <label class="text-muted font-weight-bold">Grupa krwi</label>
                                    <input type="text" title="Wybierz grupę krwi" name="blood_type" list="blood_type" placeholder="Grupa krwi" class="form-control mb-3" required>
                                        <datalist id="blood_type">
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="0+">0+</option>
                                            <option value="0-">0-</option>
                                        </datalist>
                                    <label class="text-muted font-weight-bold">Miejscowość</label>
                                    <input type="text" title="Wpisz tylko litery" name="doncity" placeholder="Miejscowość" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{0,}">
                                    <label class="text-muted font-weight-bold">Telefon</label>
                                    <input type="text" title="Wpisz tylko 9 cyfr bez spacji" name="dontel" placeholder="Telefon" class="form-control mb-3" required pattern="[0-9]{9}">
                                    <label class="text-muted font-weight-bold">Email</label>
                                    <input type="email" title="Wpisz adres mailowy" name="donemail" placeholder="Email" class="form-control mb-3" required pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}">
                                    <label class="text-muted font-weight-bold">Hasło</label>
                                    <input type="password" title="Minimum 5 znaków, jedna duża litera, jedna mała, cyfra i znak specjalny" name="donpass" placeholder="Hasło" class="form-control mb-3" required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$">
                                    <input type="submit" name="donregister" value="Zarejestruj" class="btn btn-primary btn-block mb-4">
                                </form>
                            </div>
                        </div>
                        <a href="login.php" class="text-center mb-4">Czy masz już konto?</a>
                    </div>
                </div>
            </div>
        </div>
        <?php require "footer.php"?>
    </body>
</html>
<?php } ?>