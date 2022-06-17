import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import BBDataService from "../../services/bloodbank"

function BBRegister() {

  const[bbname, setBBname] = useState("");
  const[bbcity, setBBcity] = useState("");
  const[bbtel, setBBtel] = useState("");
  const[bbemail, setBBemail] = useState("");
  const[bbpass, setBBpass] = useState("");
  

  function test(){
    const valBBname = /^[a-zA-Z]{1,}\s?[a-zA-Z]{1,}$/;
    const valBBcity = /^[a-zA-Z]{1,}?\s|-?[a-zA-Z]{1,}$/;
    const valBBtel = /^[0-9]{9}$/;
    const valBBemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const valBBpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
    
    if (valBBname.test(bbname) && valBBcity.test(bbcity) && valBBtel.test(bbtel) && valBBemail.test(bbemail) && valBBpass.test(bbpass)){
      console.log("ok")
      var data = {
        name: bbname,
        city: bbcity,
        tel: bbtel,
        email: bbemail,
        pass: bbpass
      }
      //TODO check post
      BBDataService.createBB(data)
    } else {
      console.log("wrong")
      if (!valBBname.test(bbname)) console.log(bbname)
      if (!valBBcity.test(bbcity)) console.log(bbcity)
      if (!valBBtel.test(bbtel)) console.log(bbtel)
      if (!valBBemail.test(bbemail)) console.log(bbemail)
      if (!valBBpass.test(bbpass)) console.log(bbpass)
    }
    //console.log(bbname)
    //console.log(bbcity)
    //console.log(bbtel)
    //console.log(bbemail)
    //console.log(bbpass)
  }

  return (
    <>
        <label class="text-muted font-weight-bold">Nazwa Banku Krwi</label>
        <input type="text" title="Nazwa dwuczłonowa. Wpisz tylko litery" onChange={(e) => {setBBname(e.target.value)}} name="bbname" placeholder="Nazwa Banku Krwi" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{1,}"></input>
        <label class="text-muted font-weight-bold">Miejscowość</label>
        <input type="text" title="Wpisz tylko litery" onChange={(e) => {setBBcity(e.target.value)}} name="bbcity" placeholder="Miejscowość" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{0,}"></input>
        <label class="text-muted font-weight-bold">Telefon</label>
        <input type="text" title="Wpisz tylko 9 cyfr bez spacji" onChange={(e) => {setBBtel(e.target.value)}} name="bbtel" placeholder="Telefon" class="form-control mb-3" required pattern="[0-9]{9}"></input>
        <label class="text-muted font-weight-bold">Email banku krwi</label>
        <input type="email" title="Wpisz adres mailowy" onChange={(e) => {setBBemail(e.target.value)}} name="bbemail" placeholder="Email" class="form-control mb-3" required pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"></input>
        <label class="text-muted font-weight-bold">Hasło</label>
        <input type="password" title="Minimum 5 znaków, jedna duża litera, jedna mała, cyfra i znak specjalny" onChange={(e) => {setBBpass(e.target.value)}} name="bbpass" placeholder="Hasło" class="form-control mb-3" required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$"></input>
        <input type="submit" name="bbregister" value="Zarejestruj" class="btn btn-primary btn-block mb-4" onClick={test}></input>
    </>
  );
}

export default BBRegister;
