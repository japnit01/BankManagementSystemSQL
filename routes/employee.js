const express = require("express");
const router = express.Router()
const db = require('../db');


router.post('/addcustomer', async (req, res) => {
    try {
        const { fname, lname, Email, Address, MobileNo, Age } = req.body;
        let sql = `INSERT INTO Customer (fname,lname,Email,Address,MobileNo,Age) VALUES('${fname}','${lname}','${Email}','${Address}',${MobileNo},${Age})`;

        const user = await db.query(sql)
        // if(err) throw err;
        db.end()
        console.log(user)

        // })
        // let sql1 = `INSERT INTO Account (type,Balance) VALUES('${fname}','${lname}','${Email}','${Address}',${MobileNo},${Age})`;

        return res.json("Customer Added");
    }
    catch {
        return res.json({ err: 'Account not Created' });
    }
})

module.exports = router;