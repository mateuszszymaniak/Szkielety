import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let donation


export default class donationDAO {
    static async injectDB(conn) {
        if (donation) {
            return
        }
        try {
            donation = await conn.db(process.env.PROJECT_NS).collection("donations")
        } catch (e) {
            console.error(`Unable to establish a collection handle in donationsDAO: ${e}`,)
        }
    }

    static async getDonations({
        filters = null,
        page = 0,
        donationsPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("did" in filters) {
                query = { "did": { $eq: filters["did"] } }
            } else if ("bbid" in filters) {
                query = { "bbid": { $eq: filters["bbid"] } }
            }
        }

        let cursor
        try {
            cursor = await donation.find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { donationsList: [], totalNumDonations: 0 }
        }

                const displayCursor = cursor.limit(donationsPerPage).skip(donationsPerPage * page)

                try{
                    const donationsList = await displayCursor.toArray()
                    const totalNumDonations = await donation.countDocuments(query)

                    return {donationsList, totalNumDonations}
                } catch (e) {
                    console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
                    return {donationsList: [], totalNumDonations: 0}
                }
            }

            static async addDonation(did, bbid, vol, city, date){
                try{
                    const donationRow = {
                        did: did,
                        bbid: bbid,
                        vol: vol,
                        city: city,
                        date: date,
                    }
                    return await donation.insertOne(donationRow)
                } catch (e) {
                    console.error(`Unable to post donation: ${e}`)
                    return {error: e}
                }
            }

        //     static async updateBlood_bank(id, name, email){
        //         try{
        //             const updateResponse = await blood_bank.updateOne(
        //                 {email: email, _id: ObjectId(id)},
        //                 {$set: {name: name}}
        //             )
        //             return updateResponse
        //         } catch (e) {
        //             console.error(`Unable to update blood_bank: ${e}`)
        //             return {error: e}
        //         }
        //     }

            static async deleteDonation(id){
                try{
                    const deleteResponse = await donation.deleteOne({
                        _id: ObjectId(id),
                    })
                    return deleteResponse
                } catch (e) {
                    console.error(`Unable to delete donation: ${e}`)
                    return {error: e}
                }
            }
    }