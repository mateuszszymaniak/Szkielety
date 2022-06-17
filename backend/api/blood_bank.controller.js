import blood_bankDAO from "../dao/blood_bankDAO.js"

export default class Blood_bankController{
    static async apiGetBlood_banks(req, res, next){
        const blood_banksPerPage = req.query.blood_banksPerPage ? parseInt(req.query.blood_banksPerPage, 10): 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.city){
            filters.city = req.query.city
        } else if (req.query.name){
            filters.name = req.query.name
        }
        else if (req.query.email){
            filters.email = req.query.email
        }

        const {blood_banksList, totalNumBlood_banks} = await blood_bankDAO.getBlood_banks({
            filters,
            page,
            blood_banksPerPage
        })

        let response = {
            blood_banks: blood_banksList,
            page: page,
            filters: filters,
            entries_per_page: blood_banksPerPage,
            total_results: totalNumBlood_banks,
        }
        res.json(response)
    }

    static async apiPostBlood_banks(req, res, next){
        try{
            const blood_bank_name = req.body.name
            const city = req.body.city
            const tel = req.body.tel
            const email = req.body.email
            const pass = req.body.pass

            const PostResponse = await blood_bankDAO.addBlood_bank(
                blood_bank_name,
                city,
                tel,
                email,
                pass,
            )
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiUpdateBlood_banks(req, res, next){
        try{
            const blood_bankId = req.body.blood_bank_id
            const blood_bank_name = req.body.name
            const city = req.body.city
            const tel = req.body.tel
            const email = req.body.email
            const pass = req.body.pass
            
            //na razie tylko zmiana nazwy
            //nie wiem jak zrobic, ze jak sie nie poda parametru to zapytanie nie nadpisuje wartosci
            const updateResponse = await blood_bankDAO.updateBlood_bank(
                blood_bankId,
                blood_bank_name,
                //city,
                //tel,
                email,
                //pass,
            )
            var {error} = updateResponse
            if(error){
                res.status(400).json({error})
            }
            if(updateResponse.modifiedCount === 0){
                throw new Error(
                    "Unable to update bloodbank - user may not be a original poster",
                )
            }
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiDeleteBlood_banks(req, res, next){
        try{
            const blood_bankId = req.body.blood_bank_id
            const email = req.body.email
            const deleteResponse = await blood_bankDAO.deleteBlood_bank(
                blood_bankId,
                email
            )
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }
}