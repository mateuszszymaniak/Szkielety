import donorDAO from "../dao/donorDAO.js"
import jwt from "jsonwebtoken"
export default class DonorAuthController {
    static async apiAuthDonor(req, res, next) {
        console.log("start")
        const email = req.query.email
        const pass = req.query.password
        let secret = "secret-key"

        
        let filters = {}
        if (req.query.email) {
            filters.email = req.query.email
        }

        const { donorsList, totalNumDonors } = await donorDAO.getDonors({
            filters: filters
        })

        if (email === donorsList[0].email && pass == donorsList[0].pass) {
            var token = jwt.sign({id: donorsList[0]._id}, secret,
                {
                    expiresIn:86400
                })
            var response = {
                email: donorsList[0].email,
                _id: donorsList[0]._id,
                token: token,
                logged_type: "D",
                filters: filters
            }
        }
        res.json(response)
    }
}