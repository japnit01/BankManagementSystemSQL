const express = require("express");
const router = express.Router()
const db = require('../db');

router.get('/getcustomer', async (req, res) => {
    let sql = "SELECT * FROM Customer";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        // db.end()
        res.json(result);
    })
});

router.post('/addcustomer', async (req, res) => {
    try {
        const { fname, lname, Email, Address, MobileNo, Age } = req.body;
        let sql = `INSERT INTO Customer (fname,lname,Email,Address,MobileNo,Age) VALUES('${fname}','${lname}','${Email}','${Address}',${MobileNo},${Age})`;

        db.query(sql, (err, result) => {
            if (err) throw err;
            // console.log(re)
        })
        // let sql1 = `INSERT INTO Account (type,Balance) VALUES('${fname}','${lname}','${Email}','${Address}',${MobileNo},${Age})`;

        return res.json("Customer Added");
    }
    catch {
        return res.json({ err: 'Account not Created' });
    }
})

router.put('/updatecustomer', async (req, res) => {
    const { custId, fname, lname, Email, Address, MobileNo, Age } = req.body;
    let sql = `UPDATE Customer SET fname= '${fname}',lname = '${lname}',Email = '${Email}',Address='${Address}',MobileNo = '${MobileNo}',Age=${Age} WHERE custId=${custId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        // db.end()
        res.json("Customer updated")
    })
}) 

router.delete('/deletecustomer/:custId', async (req, res) => {
    let sql = `DELETE FROM Customer WHERE custId = ${req.params.custId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        
        res.json("Customer deleted")
    })
})


module.exports = router;