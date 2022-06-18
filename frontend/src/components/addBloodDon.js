import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from "react";
import DonorDataService from "../services/donor"
import DonationDataService from "../services/donation"
import moment from "moment"
function AddBloodDonation()
{

    const[bbid, setBBid] = useState(sessionStorage.getItem("_id"));
    const[did, setDid] = useState("");
    const[donvolume, setDonVolume] = useState("");
    const[doncity, setDonCity] = useState("");
    const[dondate, setDonDate] = useState("");

function addDonation()
{


    const valDoncity = /^[a-zA-Z]{1,}?\s|-?[a-zA-Z]{1,}$/;
    const valDonVolume = /^[1-9]{1}\d*$/
    var date = moment(dondate);
    if(valDoncity.test(doncity) && valDonVolume.test(donvolume) && date != null && bbid != null && did != null)
    {
        DonationDataService.getDon().then( response =>
            {
                console.log(response.data.donations);
            })
            .catch(e =>
            {
                console.log(e);
            });
        console.log("ok")
        console.log("bbid "+ bbid)
        console.log("did "+did)
        console.log("vol "+donvolume)
        console.log("city "+doncity)
        console.log("date "+dondate)
        var data = {
            did: did,
            bbid: bbid,
            vol: donvolume,
            city: doncity,
            date: dondate,
          }
        DonationDataService.createDon(data)
        window.location.href = '/?resultDono=success';
    }
    else
    {
        console.log("not ok")
        console.log("bbid "+ bbid)
        console.log("did "+did)
        console.log("vol "+donvolume)
        console.log("city "+doncity)
        console.log("date "+dondate)
    }
}

const[donolist, setOptions] = useState([]);

useEffect(() =>
{
    let tablica = []
    DonorDataService.getD().then( response =>
        {
            setOptions(response.data.donors);
            console.log(tablica)
        
        })
        .catch(e =>
        {
            console.log(e);
        });

    },[]
)



return(
<div class="container cont"> 
<div class="row justify-content-center">
<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-6 mb-5" style={{width: "60%"}}>
<table class="table table-responsive table-striped rounded mb-5">
                        <br/>
                        <label class="text-muted font-weight-bold">Dawca </label>
                            <select name="donid" class="form-control mb-4" onChange={(e) => {setDid(e.target.value)}}>
                                <option disabled=""  hidden></option>
                                {
                                    donolist.map(element => <option value={element._id}> {element.name} </option>)
                                }
                            </select>
                            <label class="text-muted font-weight-bold">Ilość krwi (ml)</label>
                            <input type="number" name="donvolume" min={300} max={2000}  onChange={(e) => {setDonVolume(e.target.value)}} placeholder="Ilość krwi" class="form-control mb-3"></input>
                            <label class="text-muted font-weight-bold">Miejscowość</label>
                            <input type="text" title="Wpisz tylko litery" name="doncity" onChange={(e) => {setDonCity(e.target.value)}} placeholder="Miejscowość" class="form-control mb-3" required pattern="[a-zA-Z]{1,}\s?[a-zA-Z]{0,}"></input>
                            <label class="text-muted font-weight-bold">Data oddania krwi</label>
                            <input type="datetime-local" name="dondate" class="form-control mb-3" onChange={(e) => {setDonDate(e.target.value)}}></input>
                            <input type="submit" name="searchDon" value="Dodaj donację" onClick={addDonation} class="btn btn-success"/>
                    </table>
                </div>
        </div>
</div>
);
}

export default AddBloodDonation;