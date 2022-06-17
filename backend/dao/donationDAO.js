import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let donation


export default class donationDAO{
    static async injectDB(conn){
        if(donation){
            return
        }
        try{
            donation = await conn.db(process.env.PROJECT_NS).collection("blood_banks")
        } catch (e){
            console.error(`Unable to establish a collection handle in donationsDAO: ${e}`,)
        }
    }

//     static async getBlood_banks({
//         filters = null,
//         page = 0,
//         blood_banksPerPage = 20,
//     } = {}) {
//         let query
//         if (filters) {
//             if("name" in filters){
//                 query = {"name": {$eq: filters["name"]}}
//             } else if ("city" in filters){
//                 query = {"city": {$eq: filters["city"]}}
//             }
//         }

//         let cursor
//         try{
//             cursor = await blood_bank.find(query)
//         } catch (e) {
//             console.error(`Unable to issue find command, ${e}`)
//             return {blood_banksList: [], totalNumBlood_banks: 0}
//         }

//         const displayCursor = cursor.limit(blood_banksPerPage).skip(blood_banksPerPage * page)

//         try{
//             const blood_banksList = await displayCursor.toArray()
//             const totalNumBlood_banks = await blood_bank.countDocuments(query)

//             return {blood_banksList, totalNumBlood_banks}
//         } catch (e) {
//             console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
//             return {blood_banksList: [], totalNumBlood_banks: 0}
//         }
//     }

//     static async addBlood_bank(name, city, tel, email, pass){
//         try{
//             const Blood_bankDoc = {
//                 name: name,
//                 city: city,
//                 tel: tel,
//                 email: email,
//                 pass: pass,
//             }
//             return await blood_bank.insertOne(Blood_bankDoc)
//         } catch (e) {
//             console.error(`Unable to post blood_bank: ${e}`)
//             return {error: e}
//         }
//     }

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

//     static async deleteBlood_bank(id, email){
//         try{
//             const deleteResponse = await blood_bank.deleteOne({
//                 _id: ObjectId(id),
//                 email: email
//             })
//             return deleteResponse
//         } catch (e) {
//             console.error(`Unable to delete blood_bank: ${e}`)
//             return {error: e}
//         }
//     }
}