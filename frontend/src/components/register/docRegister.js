import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function DocRegister() {
  return (
    <>
        <label class="text-muted font-weight-bold">Imię i Nazwisko Dawcy</label>
        <input type="text" title="Nazwa dwuczłonowa. Wpisz tylko litery" name="donname" placeholder="Imię i Nazwisko Dawcy" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{1,}"></input>
        <label class="text-muted font-weight-bold">Grupa krwi</label>
        <input type="text" title="Wybierz grupę krwi" name="blood_type" list="blood_type" placeholder="Grupa krwi" class="form-control mb-3" required></input>
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
        <input type="text" title="Wpisz tylko litery" name="doncity" placeholder="Miejscowość" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{0,}"></input>
        <label class="text-muted font-weight-bold">Telefon</label>
        <input type="text" title="Wpisz tylko 9 cyfr bez spacji" name="dontel" placeholder="Telefon" class="form-control mb-3" required pattern="[0-9]{9}"></input>
        <label class="text-muted font-weight-bold">Email</label>
        <input type="email" title="Wpisz adres mailowy" name="donemail" placeholder="Email" class="form-control mb-3" required pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"></input>
        <label class="text-muted font-weight-bold">Hasło</label>
        <input type="password" title="Minimum 5 znaków, jedna duża litera, jedna mała, cyfra i znak specjalny" name="donpass" placeholder="Hasło" class="form-control mb-3" required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$"></input>
        <input type="submit" name="donregister" value="Zarejestruj" class="btn btn-primary btn-block mb-4"></input>
    </>
  );
}

export default DocRegister;
