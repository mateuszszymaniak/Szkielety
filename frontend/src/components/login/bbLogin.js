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

  const valBBemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const valBBpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
  
  function try_login(){
if (valBBemail.test(bbemail) && valBBpass.test(bbpass)){
      console.log("ok")
      var data = {
        email: bbemail,
        pass: bbpass
      }
      //TODO check post
       BBDataService.getBBByEmail(bbemail).then(response => 
        {
          console.log(response.data)
          if(response.data.blood_banks[0].email == bbemail && response.data.blood_banks[0].pass == bbpass)
          {
            console.log("zalogowany")
            user.name=response.data.blood_banks[0].name
            user.id=response.data.blood_banks[0]._id
            user.type="BB"
            // console.log(user);
            login(user);
          }
          else
          {
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
