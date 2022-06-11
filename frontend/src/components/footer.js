import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    const year = new Date();
    return (
        <footer class="footer text-center bg-light">
            © Praca zaliczeniowa z przedmiotu szkielety programistyczne {year.getFullYear()}
        </footer>
    )
}

export default Footer;