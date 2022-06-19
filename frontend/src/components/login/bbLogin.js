import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import BBDataService from "../../services/bloodbank.js"

const BBLogin = props => {
  let user = {
    name: "",
    id: "",
    type: "NL",
  };

  const login = (par) =>
{
  console.log(par);
  props.login(par);
}

  const[bbemail, setBBemail] = useState("");
  const[bbpass, setBBpass] = useState("");

  function hashCode(string) {
    var hash = 0, i, chr;
    if (string.length === 0) return hash;
    for (i = 0; i < string.length; i++) {
      chr   = string.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  const valBBemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const valBBpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
  
  function try_login(){
    if (valBBemail.test(bbemail) && valBBpass.test(bbpass)){
      console.log("ok")
      var data = {
        email: bbemail,
        pass: hashCode(bbpass)
      }
      //TODO check post
       BBDataService.getBBByEmail(bbemail).then(response => 
        {
          console.log(response.data)
          if(response.data.blood_banks[0].email == bbemail && response.data.blood_banks[0].pass == hashCode(bbpass))
          {
            console.log("zalogowany")
            user.name=response.data.blood_banks[0].name
            user.id=response.data.blood_banks[0]._id
            user.type="BB"
            // console.log(user);
            alert("Zalogowano pomyślnie")
            login(user);
          }
          else
          {
            alert("Podano nieprawidłowy login lub hasło")
            console.log("niezalogowany")
          }
        })
        .catch(e =>
        {
          console.log(e);
        })
       ;

    } else {
      console.log("wrong")
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
      <label class="text-muted font-weight-bold">Email banku krwi</label>
      <input type="email" name="bbemail" onChange={(e) => {setBBemail(e.target.value)}} placeholder="Email banku krwi" class="form-control mb-4"></input>
      <label class="text-muted font-weight-bold">Hasło banku krwi</label>
      <input type="password" name="bbpass" onChange={(e) => {setBBpass(e.target.value)}} placeholder="Hasło banku krwi" class="form-control mb-4"></input>
      <input type="submit" name="bblogin" value="Zaloguj się" onClick={try_login} class="btn btn-primary btn-block mb-4"></input>
    </>
  );
}

export default BBLogin;
