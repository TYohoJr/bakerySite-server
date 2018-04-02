const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const morgan = require('morgan');
// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// var jwt = require('jsonwebtoken');
const path = require('path');
var pg = require('pg');
require('dotenv').config();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// function verifyToken(req, res, next) {
//     var token = req.body.token;
//     if (token) {
//         jwt.verify(token, "Secret", (err, decode) => {
//             if (err) {
//                 res.send("Wrong token")
//             } else {
//                 res.locals.decode = decode
//                 next();
//             }
//         })
//     } else {
//         console.log("no token")
//         res.send("No token")
//     }
// }

// var conString = process.env.ELEPHANTSQL_URL || "postgres://postgres:5432@localhost/postgres";


// var client = new pg.Client(conString);
// client.connect((err) => {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log('successfully connected to postgres');
//     app.listen(5000, function () {
//       console.log("Listening on 5000");
//     });
//   }
// });

MongoClient.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds261838.mlab.com:61838/dine-amite`, (err, client) => {
    if (err) return console.log(err)
    db = client.db("dine-amite") // whatever your database name is
    app.listen(process.env.PORT || 5000, () => {
        if(process.env.PORT){
            console.log(`listening on port ${process.env.PORT}`)
        }
        console.log("listening on 5000")
    })
})

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.post("/test", (req, res)=>{
    console.log("hello express");
    res.json("hello react");
})