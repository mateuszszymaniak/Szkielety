import React from "react";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../images/logo.jpg"

//linijki 18 - 28 header dla banku krwi
//linijki 29 - 36 header dla dawcy
//linijki 37 - 44 dla niezalogowanego usera
function Header() {
    var result = null;

    const logged_type = localStorage.getItem("login_type");
    if (logged_type == "BB") {
        result =
            <ul class="navbar-nav ml-auto">
                <Link to="/donation_list">
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="">Lista donacji</a>
                    </li>
                </Link>
                <Link to="/add_donation">
                    <li class="nav-item">
                        <a class="nav-link btn btn-light" href="">Dodaj donację</a>
                    </li>
                </Link>
            </ul>
    } else if (logged_type == "D") {
        result =
        <Link to="/my_profile">
            <li class="nav-item">
                <a class="nav-link btn btn-light" href="">Mój profil</a>
            </li>
        </Link>
    } else {
        result = <></>
    }



    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top">
            <div class="container">
                <Link to="/" class="navbar-brand">
                    <img src={logo} width={50} height={50} />System banku krwi
                </Link>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    {result}
                </div>
            </div>
        </nav>
    );
}

export default Header;