import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function BBLogin() {
  return (
    <>
      <label class="text-muted font-weight-bold">Email banku krwi</label>
      <input type="email" name="bbemail" placeholder="Email banku krwi" class="form-control mb-4"></input>
      <label class="text-muted font-weight-bold">Hasło banku krwi</label>
      <input type="password" name="bbpass" placeholder="Hasło banku krwi" class="form-control mb-4"></input>
      <input type="submit" name="bblogin" value="Zaloguj się" class="btn btn-primary btn-block mb-4"></input>
    </>
  );
}

export default BBLogin;
