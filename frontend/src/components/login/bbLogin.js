import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import BBAuthService from "../../services/auth_bb.js";
import jwt_decode from "jwt-decode"
 
const BBLogin = props => {
  let user = {
    name: "",
    id: "",
    type: "NL",
    token: "",
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
        password: hashCode(bbpass)
      }
       BBAuthService.authBank(data).then(response => 
        {
          console.log(response.data)
          if(response.data){
          if(response.data.token)
          {
            let decode = jwt_decode(response.data.token)
            console.log("zalogowany")
            user.name=decode.name
            user.id=decode._id
            user.type=decode.logged_type
            user.token=response.data.token
            alert("Zalogowano pomyślnie")
            // console.log(user)
            login(user);
          }
          else
          {
            alert("Podano nieprawidłowy login lub hasło")
            console.log("niezalogowany")
          }
        } else {
          alert("Podano nieprawidłowy login lub hasło")
        }
        })
        .catch(e =>
        {
          console.log(e);
        })
       ;

    } else {
      alert("Podano nieprawidłowy login lub hasło")
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
