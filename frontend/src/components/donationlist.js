import React from "react";
import { Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import DonationDataService from "../services/donation"
import BloodbankDataService from "../services/bloodbank"
import DonorDataService from "../services/donor"
import { useState, useEffect } from "react";

function DonationList() {

    const [bbid, setBbid] = useState(localStorage.getItem("_id"));
    const [donationlist, setDono] = useState([]);
    const [doPokazania, setPokaz] = useState([])

    
    function deleteDonor(id)
    {
        DonorDataService.deleteD(id)
    }

    function deleteDonation(id)
    {
        DonationDataService.deleteD(id)
    }

    useEffect(() => {
        console.log("bbid " + bbid);
        if (bbid != null) {
            DonationDataService.getDonByBBId(bbid).then(response => {
                setDono(response.data.donations);
                console.log(response.data.donations);
            }).catch(e => {
                console.log(e);
            });
            DonorDataService.getD(bbid).then(response => {
                setDonorList(response.data.donors);
                console.log(response.data.donors);
            }).catch(e => {
                console.log(e);
            });
        }
    }, []
    )

    const [donorlist, setDonorList] = useState([]);
    useEffect(() => {
        if (donationlist.length > 0 && donorlist.length > 0
        ) {
            let rob = []
            for (let i = 0; i < donorlist.length; i++) {
                let donations = []
                
                for (let j = 0; j < donationlist.length; j++) {
                    if (donorlist[i]._id === donationlist[j].did) {
                        let donation =  {
                            id: "",
                            vol: "",
                            date: "",
                        }
                        // console.log(i);
                        // console.log(donationlist[j]._id)
                        // console.log(donationlist[j].vol)
                        // console.log(donationlist[j].date)
                        // console.log(donations)
                        // console.log("#####")
                        donation.id = donationlist[j]._id
                        donation.vol = donationlist[j].vol
                        donation.date = donationlist[j].date
                        console.log(donation)
                        donations.push(donation)
                        // setDonations(donations)
                        // console.log(donationsState)
                    }
                }
                rob[i] = {
                    nr: i + 1,
                    donid: donorlist[i]._id,
                    donname: donorlist[i].name,
                    dontype: donorlist[i].blood_type,
                    dontel: donorlist[i].tel,
                    doncity: donorlist[i].city,
                    donmail: donorlist[i].email,
                    donations: donations
                }
            }
            setPokaz(rob)
        }
    }
        , [donorlist, donationlist])
    console.log(doPokazania);

    return (
        <div class="container cont">
            <div>
                {/* Brak danych */}
            </div>
            <table class="table table-responsive table-striped rounded mb-5">
                <tr><th colspan="8">Pobrana krew od dawców</th></tr>
                <tr>
                    <th>Numer dawcy</th>
                    <th>Imię i nazwisko dawcy</th>
                    <th>Grupa krwi dawcy</th>
                    <th>Numer telefonu dawcy</th>
                    <th>Miejsowość dawcy</th>
                    <th>Adres email dawcy</th>
                    <th colspan="2">Akcja</th>
                </tr>

                {
                    doPokazania.map(element =>
                        <>
                            <tr>
                                <th>{element.nr}</th>
                                <th>{element.donname}</th>
                                <th>{element.dontype}</th>
                                <th>{element.dontel}</th>
                                <th>{element.doncity}</th>
                                <th>{element.donmail}</th>
                                {/* <th><form action="bbEditDon.php" method="post">
                                    <button type="submit" name="editDon" value="<?php echo $row['ID'];?>" class="btn btn-success">Edytuj</button>
                                </form>
                                </th> */}
                                <th>
                                    <form>
                                    <button name="delDon" onClick={() => deleteDonor(element.donid)} class="btn btn-danger">Usuń</button>
                                    </form>
                                </th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Ilość</td>
                                <td>Data donacji</td>
                                <td colspan="2">Akcja</td>

                            </tr>

                            {element.donations.map(row =>
                                <>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>{row.vol}</td>
                                        <td>{row.date}</td>
                                        {/* <td><form action="bbEditDon.php" method="post">
                                            <button type="submit" name="editDon" value="<?php echo $row['ID'];?>" class="btn btn-success">Edytuj</button>
                                        </form></td> */}
                                        <td><form >
                                            <button name="delDon" onClick={() => deleteDonation(row.id)} class="btn btn-danger">Usuń</button>
                                        </form></td>
                                    </tr>
                                </>
                            )
                            }
                        </>
                    )
                }

            </table>
        </div>
    )
}

export default DonationList