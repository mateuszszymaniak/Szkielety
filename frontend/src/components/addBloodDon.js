import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {useState} from "react";

function AddBloodDonation()
{

return(
<div class="container cont"> 
<div class="row justify-content-center">
<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-6 mb-5" style={{width: "60%"}}>
<table class="table table-responsive table-striped rounded mb-5">
                        <tr>Wybierz pacjenta</tr>
                        <br/>
                        <form action="forms/bbSearchDon.php" method="post">
                            <select name="pactel" method="post">
                                <option disabled=""  hidden></option>
                                {/* <?php while($row = mysqli_fetch_assoc($result)){?>
                                <option value="<?php echo $row['dontel'];?>"><?php echo $row['donname'].' '. $row['dontel'];?></option>
                                <?php } ?> */}
                            </select>
                            <input type="submit" name="searchDon" value="Dodaj donację" class="btn btn-success"/>
                        </form>
                    </table>
                </div>
        </div>
</div>
);
}

export default AddBloodDonation;