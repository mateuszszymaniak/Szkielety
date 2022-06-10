import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function DocLogin() {
  return (
    <>
        <label class="text-muted font-weight-bold">Email dawcy</label>
        <input type="email" name="donemail" placeholder="Email dawcy" class="form-control mb-4"></input>
        <label class="text-muted font-weight-bold">Hasło dawcy</label>
        <input type="password" name="donpass" placeholder="Hasło dawcy" class="form-control mb-4"></input>
        <input type="submit" name="donlogin" value="Zaloguj się" class="btn btn-primary btn-block mb-4"></input>
    </>
  );
}

export default DocLogin;
