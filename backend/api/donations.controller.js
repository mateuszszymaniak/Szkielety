import donationDAO from "../dao/donationDAO.js"

export default class DonationsController{

    
    static async apiGetDonations(req, res, next){
        const donationsPerPage = req.query.donationsPerPage ? parseInt(req.query.donationsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.bbid){
            filters.bbid = req.query.bbid
        } else if (req.query.did){
            filters.did = req.query.did
        }

        const {donationsList, totalNumDonations} = await donationDAO.getDonations({
            filters,
            page,
            donationsPerPage
        })

        let response = {
            donations: donationsList,
            page: page,
            filters: filters,
            entries_per_page: donationsPerPage,
            total_results: totalNumDonations,
        }
        res.json(response)
    }

    static async apiPostDonations(req, res, next){
        try{
            const did = req.body.did
            const bbid = req.body.bbid
            const vol = req.body.vol
            const city = req.body.city
            const date = req.body.date
            

            const PostResponse = await donationDAO.addDonation(
                did,
                bbid,
                vol,
                city,
                date,
            )
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

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

    static async apiDeleteDonations(req, res, next){
        try{

            const donationId = req.body.donid
            const deleteResponse = await donationDAO.deleteDonation(
                donationId
            )
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }
}