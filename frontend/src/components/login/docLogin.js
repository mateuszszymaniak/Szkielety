import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import DDataService from "../../services/donor.js"

function DocLogin() {

  const[donemail, setDemail] = useState("");
  const[donpass, setDpass] = useState("");
  
  const valDemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const valDpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
  
function try_login(){  
  if (valDemail.test(donemail) && valDpass.test(donpass) ){
    console.log("ok")
    var data = {
      email: donemail,
      pass: donpass
    }
//     //TODO check post
DDataService.getDByEmail(donemail).then(response => 
  {
    console.log(response.data);
  })
  .catch(e =>
  {
    console.log(e);
  })
 ;
  } else {
    console.log("wrong")
    if (!valDemail.test(donemail)) console.log(donemail)
    if (!valDpass.test(donpass) ) console.log(donpass)
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
