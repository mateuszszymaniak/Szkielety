import express from "express"
import blood_bankCtrl from "./blood_bank.controller.js"
import donors_Ctrl from "./donors.controller.js"

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

export default router