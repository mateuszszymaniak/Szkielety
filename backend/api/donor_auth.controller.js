import donorDAO from "../dao/donorDAO.js"
import jwt from "jsonwebtoken"
export default class DonorAuthController {
    static async apiAuthDonor(req, res, next) {
        const email = req.body.email
        const pass = req.body.password
        let secret = "secret-key"

        
        let filters = {}
        if (req.body.email) {
            filters.email = req.body.email
        }

        const { donorsList, totalNumDonors } = await donorDAO.getDonors({
            filters: filters
        })
        if(donorsList == 0 ) 
        {
            return res.json({
                token: ""})
        }
        if (email === donorsList[0].email && pass == donorsList[0].pass) {
            var token = jwt.sign({
                email: donorsList[0].email,
                _id: donorsList[0]._id,
                name: donorsList[0].name,
                logged_type: "D",
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