import blood_bankDAO from "../dao/blood_bankDAO.js"
import jwt from "jsonwebtoken"

export default class BankAuthController {
    static async apiAuthBank(req, res, next) {
        const email = req.body.email
        const pass = req.body.password
        let secret = "secret-key"

        
        let filters = {}
        if (req.body.email) {
            filters.email = req.body.email
        }
        const { blood_banksList, totalNumBanks } = await blood_bankDAO.getBlood_banks({
            filters: filters
        })
        if(blood_banksList == 0 ) 
        {
            return res.json({
                token: ""})
        }
        if (email === blood_banksList[0].email && pass == blood_banksList[0].pass) {
            var token = jwt.sign({
                email: blood_banksList[0].email,
                _id: blood_banksList[0]._id,
                name: blood_banksList[0].name,
                logged_type: "BB",
            }, secret,
                {
                    expiresIn:86400
                })
            var response = {
                token: token,
            }
        }
        res.json(response)
    }
}