const express= require('express')
const app= express()
const staffRoutes = require('./routes/staffRoutes')
const bodyParser= require('body-parser')
const cors=require('cors')

require('dotenv').config()
const Port=process.env.PORT || 5000;

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


app.use('/shipping',staffRoutes)

const dbConnect=require('./config/database');
dbConnect.connect();

app.listen(Port,()=>{
    console.log(`Server started at ${Port}`)
})