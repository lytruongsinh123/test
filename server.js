const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const path = require('path');
app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('/', (req,res,next)=>{
    let duongDanFile= path.join(__dirname, 'home.html')
    res.sendFile(duongDanFile)
})

app.listen(port, ()=> {
    console.log(`Server started on http://localhost:${port}`)
})