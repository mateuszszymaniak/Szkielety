<nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
    <div class="container">
        <a class="navbar-brand" href="index.php"><img src="images/logo.jpg" width="50" height="50">System banku krwi</a>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <?php if(isset($_SESSION['bbemail'])){ ?>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="bbPage.php">Lista donacji</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="bbAddBlood.php">Dodaj donację</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="logout.php">Wyloguj</a>
                    </li>
                </ul>
            <?php } elseif (isset($_SESSION['donemail'])){?>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="donorPage.php">Mój profil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="logout.php">Wyloguj</a>
                    </li>
                </ul>
            <?php } else { ?>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="register.php">Zarejestruj się</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="login.php">Zaloguj się</a>
                    </li>
                </ul>
            <?php } ?>
        </div>
    </div>
</nav>