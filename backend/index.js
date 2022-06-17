import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import blood_bankDAO from "./dao/blood_bankDAO.js"
import donorDAO from "./dao/donorDAO.js"
import donationDAO from "./dao/donationDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 3000

MongoClient.connect(
    process.env.PROJECT_DB_URI
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await blood_bankDAO.injectDB(client)
    await donorDAO.injectDB(client)
    await donationDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})