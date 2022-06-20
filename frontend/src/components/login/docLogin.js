import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import DAuthService from "../../services/auth_d.js"
import jwt_decode from "jwt-decode"

const DocLogin = props => {
  let user = {
    name: "",
    id: "",
    type: "NL",
  };

  const login = (par) =>
  {
    // console.log(par);
    props.login(par);
  }
  
  
  const[donemail, setDemail] = useState("");
  const[donpass, setDpass] = useState("");
  
  const valDemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const valDpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
  
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

function try_login(){  
  if (valDemail.test(donemail) && valDpass.test(donpass) ){
    console.log("ok")
    var data = {
      email: donemail,
      password: hashCode(donpass)
    }
    console.log(data)
//     //TODO check post
DAuthService.authDonor(data).then(response => 
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
}

  return (
    <>
        <label class="text-muted font-weight-bold">Email dawcy</label>
        <input type="email" name="donemail"  onChange={(e) => {setDemail(e.target.value)}} placeholder="Email dawcy" class="form-control mb-4"></input>
        <label class="text-muted font-weight-bold">Hasło dawcy</label>
        <input type="password" name="donpass" placeholder="Hasło dawcy"onChange={(e) => {setDpass(e.target.value)}}  class="form-control mb-4"></input>
        <input type="submit" name="donlogin" value="Zaloguj się" onClick={try_login} class="btn btn-primary btn-block mb-4"></input>
    </>
  );
}

export default DocLogin;
