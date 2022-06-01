<?php
    session_start();
    require 'forms/createdb.php';
    require 'forms/dbconnection.php';
?>

<!DOCTYPE html>
<html>
<?php $title="Strona główna";
require "head.php"; ?>
    <body>
        <?php require 'header.php';?>
        <div class="container cont">
            <?php require 'msg.php'; ?>
            <div>Przed oddaniem krwi</div>
            <div>1. Sprawdź, w jakie dni i w jakich godzinach jest czynne centrum/punkt, w którym chcesz oddać krew Adresy Regionalnych Centrów Krwiodawstwa i Krwiolecznictwa, oddziałów terenowych oraz stałych punktów poboru krwi Pamiętaj, że możesz również oddać krew w czasie akcji wyjazdowych mobilnych punktów poboru krwi tzw. krwiobusów.</div>
            <div>2. Wybierz dzień, przed którym będziesz mógł wypocząć – wyspać się. Zarezerwuj sobie około godziny czasu.</div>
            <div>3. Koniecznie zjedz lekki posiłek przed oddaniem krwi (unikaj pokarmów zawierających dużą ilość tłuszczu);</div>
            <div>4. Pij dużo soków owocowych i wody.</div>
            <div>5. Unikaj nadmiernego fizycznego wysiłku przed oddaniem krwi.</div>
            <div>6. Jeżeli wybierasz się po raz pierwszy zabierz ze sobą kogoś do towarzystwa, poczujesz się pewniej a przede wszystkim bezpieczniej.</div>
            <div>7. Weź dowód tożsamości i jeżeli masz legitymację honorowego dawcy krwi.</div>
            <br>
        </div>    
    <?php require 'footer.php'; ?>
    </body>
</html>