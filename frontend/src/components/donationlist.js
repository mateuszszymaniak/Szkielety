import React from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function DonationList()
{

return (
<div class="container cont"> 
<div>
{/* Brak danych */}
</div>
<table class="table table-responsive table-striped rounded mb-5">
<tr><th colspan="8">Pobrana krew od dawców</th></tr>
                <tr>
                    <th>Numer donacji</th>
                    <th>Imię i nazwisko dawcy</th>
                    <th>Grupa krwi dawcy</th>
                    <th>Numer telefonu dawcy</th>
                    <th>Miejsowość dawcy</th>
                    <th>Adres email dawcy</th>
                    <th colspan="2">Akcja</th>
                </tr>
                
{/* <tr>
                    <td><?php echo ++$counter;?></td>
                    <td><?php echo $row['donname'];?></td>
                    <td><?php echo $row['blood_type'];?></td>
                    <td><?php echo $row['dontel'];?></td>
                    <td><?php echo $row['doncity'];?></td>
                    <td><?php echo $row['donemail'];?></td>
                    <td> 
                        <form action="bbEditDon.php" method="post">
                            <button type="submit" name="editDon" value="<?php echo $row['ID'];?>" class="btn btn-success">Edytuj</button>
                        </form>
                    </td>
                    <td>
                        <form action="forms/bbDelDon.php" method="post">
                            <button type="submit" name="delDon" value="<?php echo $row['ID'];?>" class="btn btn-danger">Usuń</button>
                        </form>
                    </td>
                </tr> */}
                </table>
</div>
)
}

export default DonationList