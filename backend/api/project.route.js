import express from "express"
import blood_bankCtrl from "./blood_bank.controller.js"
import donors_Ctrl from "./donors.controller.js"
import donors_Auth from "./donor_auth.controller.js"
import bank_Auth from "./bank_auth.controller.js"
import donations_Ctrl from "./donations.controller.js"

const router = express.Router()

router.route("/blood_bank")
    .get(blood_bankCtrl.apiGetBlood_banks)
    .post(blood_bankCtrl.apiPostBlood_banks)
    .put(blood_bankCtrl.apiUpdateBlood_banks)
    .delete(blood_bankCtrl.apiDeleteBlood_banks)

router.route("/donors")
    .get(donors_Ctrl.apiGetDonors)
    .post(donors_Ctrl.apiPostDonors)
    .put(donors_Ctrl.apiUpdateDonors)
    .delete(donors_Ctrl.apiDeleteDonors)

router.route("/donation")
    .get(donations_Ctrl.apiGetDonations)
    .post(donations_Ctrl.apiPostDonations)
    // .put(donations_Ctrl.apiUpdateDonations)
    .delete(donations_Ctrl.apiDeleteDonations)

router.route("/donor_auth")
    .get(donors_Auth.apiAuthDonor)

router.route("/bank_auth")
    .get(bank_Auth.apiAuthBank)

export default router