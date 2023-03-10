const express = require('express')
const config=require('config')
const cors = require('cors')
const dbConnect=require('./helpers/dbConnect')
const path = require('path')
dbConnect()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/Client',require('./Routes/ClientRoute'))
app.use('/api/Admin',require('./Routes/AdminRoute'))
app.use('/api/Product',require('./Routes/ProductRoute'))
app.use('/api/Project',require('./Routes/ProjectRoute'))
app.use('/api/Command',require('./Routes/CommandRoute'))
app.use('/api/uploads', express.static(path.join(__dirname,'./', 'uploads')))


const PORT = 5000 || config.get('SERVER_CONFIG.PORT')
app.listen(PORT , (err)=>{
    err? console.log(err) : console.log('server running on port 5000')
})