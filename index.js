const express = require("express");
const cors = require('cors')
const db = require('./db');

const app  = express();
const port = 5000;

app.use(cors())
app.use(express.json())
app.use('/api/createdb',require('./routes/createdatabase'));
app.use('/api/c',require('./routes/customer'));


app.listen(port,()=>{ 
    console.log(`Listening at ${port}`)
});