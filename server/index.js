
const express = require('express')
const app = express()
var cors = require('cors')
const mysql =  require("mysql2")
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) //necessary to get data from req body

// var corsOptions = {
//     origin: "http://localhost/3000",
// }
app.use(cors())


const db = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
})


// app.use(express.json) //only accept json data causing error



app.post('/contact', (req,res) =>{
    const query = "INSERT INTO contact_infos (`email`,`subject`,`text`) VALUES(?)"
    const values = [
        req.body.FormData.email ,
        req.body.FormData.subject,
        req.body.FormData.text,
    ]
    

    db.query(query,[values], (err, data)=>{
        if(err){
            console.log("sql error")
            return res.json(err)
        } 
        return res.sendStatus(200)
    })
})



const port =8080
app.listen(port, ()=>{
    console.log(`listerning to port: ${port}`)
})