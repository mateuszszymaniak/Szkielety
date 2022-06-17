import donationDAO from "../dao/donationDAO.js"

export default class DonationsController{
    static async apiGetDonations(req, res, next){
        console.log("getdon")
    }
    
    // static async apiGetDonors(req, res, next){
    //     const donorsPerPage = req.query.donorsPerPage ? parseInt(req.query.donorsPerPage, 10) : 20
    //     const page = req.query.page ? parseInt(req.query.page, 10) : 0

    //     let filters = {}
    //     if (req.query.city){
    //         filters.city = req.query.city
    //     } else if (req.query.blood_type){
    //         filters.blood_type = req.query.blood_type
    //     }

    //     const {donorsList, totalNumDonors} = await donorDAO.getDonors({
    //         filters,
    //         page,
    //         donorsPerPage
    //     })

    //     let response = {
    //         donors: donorsList,
    //         page: page,
    //         filters: filters,
    //         entries_per_page: donorsPerPage,
    //         total_results: totalNumDonors,
    //     }
    //     res.json(response)
    // }

    // static async apiPostDonors(req, res, next){
    //     try{
    //         const donor_name = req.body.name
    //         const blood_type = req.body.blood_type
    //         const city = req.body.city
    //         const tel = req.body.tel
    //         const email = req.body.email
    //         const pass = req.body.pass

    //         const PostResponse = await donorDAO.addDonor(
    //             donor_name,
    //             blood_type,
    //             city,
    //             tel,
    //             email,
    //             pass,
    //         )
    //         res.json({status: "success"})
    //     } catch (e) {
    //         res.status(500).json({error: e.message})
    //     }
    // }

    // static async apiUpdateDonors(req, res, next){
    //     try{
    //         const donorId = req.body.donor_id
    //         const donor_name = req.body.name
    //         const city = req.body.city
    //         const tel = req.body.tel
    //         const email = req.body.email
    //         const pass = req.body.pass

    //         //na razie tylko zmiana nazwy
    //         //nie wiem jak zrobic, ze jak sie nie poda parametru to zapytanie nie nadpisuje wartosci
    //         const updateResponse = await donorDAO.updateDonor(
    //             donorId,
    //             donor_name,
    //             //city,
    //             //tel,
    //             email,
    //             //pass,
    //         )
    //         var {error} = updateResponse
    //         if(error){
    //             res.status(400).json({error})
    //         }
    //         if(updateResponse.modifiedCount === 0){
    //             throw new Error(
    //                 "Unable to update donor - user may not be a original poster",
    //             )
    //         }
    //         res.json({stutus: "success"})
    //     } catch (e) {
    //         res.status(500).json({error: e.message})
    //     }
    // }

    // static async apiDeleteDonors(req, res, next){
    //     try{
    //         const donorId = req.body.donor_id
    //         const email = req.body.email
    //         const deleteResponse = await donorDAO.deleteDonor(
    //             donorId,
    //             email
    //         )
    //         res.json({status: "success"})
    //     } catch (e) {
    //         res.status(500).json({error: e.message})
    //     }
    // }
}