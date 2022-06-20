import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import BloodbankDataService from "../services/bloodbank"
import DonationDataService from "../services/donation"
function MyProfile() {


    const [did, setDid] = useState(localStorage.getItem("_id"));

    const [donationlist, setDono] = useState([]);
    const [bblist, setBBList] = useState([]);
    const [doPokazania, setPokaz] = useState([])



    useEffect(() => {
        console.log("did " + did);
        if (did != null) {
            DonationDataService.getDonById(did).then(response => {
                setDono(response.data.donations);

            })
            BloodbankDataService.getBB().then(response => {
                setBBList(response.data.blood_banks);
            })
                .catch(e => {
                    console.log(e);
                });

            

        }


    }, []
    )
useEffect(() => {

    if (donationlist.length > 0 && bblist.length > 0
        ) {
            let rob = []
            for (let i = 0; i < donationlist.length; i++) {
                let bbnazwa = ""
                let bbtel = ""
                let bbcity = ""
                let bbemail = ""
                for (let j = 0; j < bblist.length; j++) {
                    if (bblist[j]._id === donationlist[i].bbid) {
                        bbnazwa = bblist[j].name
                        bbtel = bblist[j].tel
                        bbcity = bblist[j].city
                        bbemail = bblist[j].email
                        break;
                    }
                }
                console.log(donationlist.date)
                rob[i] = {
                    nr: i,
                    date: donationlist[i].date,
                    bbnazwa: bbnazwa,
                    bbtel: bbtel,
                    bbcity: bbcity,
                    bbemail: bbemail,
                }
            }
            setPokaz(rob)
        }
}

,[bblist, donationlist])

    console.log(donationlist)
    console.log(bblist)
    console.log(doPokazania)

    return (
        <div class="container cont">

            <table class="table table-responsive table-striped rounded mb-5">
                <tr><th colspan="6">Donacje Twojej grupy krwi</th></tr>
                <tr>
                    <th>Numer donacji</th>
                    <th>Data donacji</th>
                    <th>Nazwa banku krwi</th>
                    <th>Telefon do banku krwi</th>
                    <th>Miejsowość banku krwi</th>
                    <th>Adres email banku krwi</th>
                </tr>
                {
                    doPokazania.map(element =>
                        <tr>
                            <td>{element.nr + 1}</td>
                            <td>{element.date}</td>
                            <td>{element.bbnazwa}</td>
                            <td>{element.bbtel}</td>
                            <td>{element.bbcity}</td>
                            <td>{element.bbemail}</td>
                        </tr>)

                }

            </table>
        </div>
    );
}

export default MyProfile;