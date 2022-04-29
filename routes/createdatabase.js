const express = require("express");
const router = express.Router()
const db = require('../db');

router.get('/database',(req,res)=>{
    let sql = 'Create Database bmssql';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        db.end()
        res.send('Database created')
    })
})

router.get('/employeetable',(req,res)=>{
    let sql = 'CREATE TABLE employee(empid int AUTO_INCREMENT, name VARCHAR(255) NOT NULL,dept VARCHAR(255) NOT NULL, PRIMARY KEY(empid))';
    
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Employee table created');
    });
});

router.get('/accounttable',(req,res)=>{
    let sql = 'CREATE TABLE account (AccNo INTEGER AUTO_INCREMENT PRIMARY KEY,type VARCHAR(50) NOT NULL,Balance INTEGER,custId INTEGER,FOREIGN KEY (custId) REFERENCES CUSTOMER (custId))';

    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Acount table created');
    });
});

router.get('/customertable',(req,res)=>{
    
    let sql = 'CREATE TABLE Customer(custId INTEGER AUTO_INCREMENT PRIMARY KEY,fname VARCHAR(50) NOT NULL,lname VARCHAR(50) NOT NULL, Email VARCHAR(50) NOT NULL UNIQUE ,Address VARCHAR(100) NOT NULL,MobileNo VARCHAR(10) UNIQUE,Age int, CHECK (Age>=18))';

    db.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send('Customer table created');
    });
});

router.get('/loantable',(req,res)=>{
    let sql = 'CREATE TABLE Loan (loanId INTEGER AUTO_INCREMENT PRIMARY KEY,type VARCHAR(50) NOT NULL,amount INTEGER)';

    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Loan table created');
    });
})



module.exports = router;