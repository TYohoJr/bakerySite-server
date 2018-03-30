var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// var jwt = require('jsonwebtoken');
var path = require('path')
require('dotenv').config();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

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

// Only has the server listening if it can successfully connect to the database
MongoClient.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds229549.mlab.com:29549/bakery-site`, (err, client) => {
    if (err) return console.log(err)
    db = client.db("dine-amite") // whatever your database name is
    app.listen(process.env.PORT || 8080, () => {
        let activePORT = process.env.PORT;
        if (activePORT) {
            console.log(`listening on ${activePORT}`)
        } else {
            console.log(`listening on http://localhost:8080/`)
        }
    })
})

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.post("/test", (req, res)=>{
    console.log("hello express");
    res.json("hello react");
})