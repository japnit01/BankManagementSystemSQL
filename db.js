const mysql = require("mysql2");

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port: '3306',
    database:'bmssql'
});

    db.connect((err)=>{
        if(err){
            throw err;
        }
        console.log("Mysql Connected");
    });

module.exports = db;