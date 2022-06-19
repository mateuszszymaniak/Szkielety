import blood_bankDAO from "../dao/blood_bankDAO.js"
import jwt from "jsonwebtoken"

export default class BankAuthController {
    static async apiAuthBank(req, res, next) {
        const email = req.query.email
        const pass = req.query.password
        let secret = "secret-key"

        
        let filters = {}
        if (req.query.email) {
            filters.email = req.query.email
        }

        const { bankList, totalNumBanks } = await blood_bankDAO.getDonors({
            filters: filters
        })

        if (email === bankList[0].email && pass == bankList[0].pass) {
            var token = jwt.sign({id: bankList[0]._id}, secret,
                {
                    expiresIn:86400
                })
            var response = {
                email: bankList[0].email,
                _id: bankList[0]._id,
                token: token,
                logged_type: "D",
                filters: filters
            }
        }
        res.json(response)
    }
}