import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let donor

export default class donorDAO{
    static async injectDB(conn){
        if(donor){
            return
        }
        try{
            donor = await conn.db(process.env.PROJECT_NS).collection("donors")
        } catch (e){
            console.error(`Unable to establish a collection handle in donorDAO: ${e}`,)
        }
    }

    static async getDonors({
        filters = null,
        page = 0,
        donorsPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if("blood_type" in filters){
                query = {"blood_type": {$eq: filters["blood_type"]}}
            } else if ("city" in filters){
                query = {"city": {$eq: filters["city"]}}
            }
        }

        let cursor
        try{
            cursor = await donor.find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return {donorsList: [], totalNumDonors: 0}
        }

        const displayCursor = cursor.limit(donorsPerPage).skip(donorsPerPage * page)

        try{
            const donorsList = await displayCursor.toArray()
            const totalNumDonors = await donor.countDocuments(query)

            return {donorsList, totalNumDonors}
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
            return {donorsList: [], totalNumDonors: 0}
        }
    }

    static async addDonor(name, blood_type, city, tel, email, pass){
        try{
            const DonorDoc = {
                name: name,
                blood_type: blood_type,
                city: city,
                tel: tel,
                email: email,
                pass: pass,
            }
            return await donor.insertOne(DonorDoc)
        } catch (e) {
            console.error(`Unable to post donor: ${e}`)
            return {error: e}
        }
    }

    static async updateDonor(id, name, email, city){
        try{
            const updateResponse = await donor.updateOne(
                {email: email, _id: ObjectId(id)},
                {$set: {name: name, city:city}}
            )
            return updateResponse
        } catch (e) {
            console.error(`Unable to update donor: ${e}`)
            return {error: e}
        }
    }

    static async deleteDonor(id, email){
        try{
            const deleteResponse = await donor.deleteOne({
                _id: ObjectId(id),
                email: email
            })
            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete donor: ${e}`)
            return {error: e}
        }
    }
}