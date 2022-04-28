const express = require("express");
const res = require("express/lib/response");
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

const app  = express();
const port = 5000;

app.get('/createdb',(req,res)=>{
    let sql = 'Create Database bmssql';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        db.end()
        res.send('Database created')
    })
})

app.get('/createemployeetable',(req,res)=>{
    let sql = 'CREATE TABLE employee(empid int AUTO_INCREMENT, name VARCHAR(255) NOT NULL,dept VARCHAR(255) NOT NULL, PRIMARY KEY(empid))';
    
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Employee table created');
    })
});

app.post('/addemployee',(req,res)=>{
    let employeedetails = req.body;
    let sql = 'INSERT INTO employee SET ?';
    
})

// app.get('create')



app.listen(port,()=>{ 
    console.log(`Listening at ${port}`)
});