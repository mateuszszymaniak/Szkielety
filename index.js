const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', function(req, res){
    res.send('<h1>Hello World from Express</h1>')
})
app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))