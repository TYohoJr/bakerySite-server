const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
// var jwt = require('jsonwebtoken');
const path = require('path');
var pg = require('pg');
require('dotenv').config();
var stripe = require('stripe')(process.env.STRIPE_SECRET);

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

var conString = process.env.ELEPHANTSQL_URL || "postgres://postgres:5432@localhost/postgres";
stripe.customers.create(
    { email: 'customer@example.com' },
    function (err, customer) {
        err; // null if no error occurred
        customer; // the created customer object
    }
);

app.post("/save-stripe-token", (req, res) => {
    console.log(req.body);
})

var client = new pg.Client(conString);
client.connect((err) => {
    if (err) {
        return console.error(err);
    } else {
        console.log('successfully connected to postgres');
        app.listen(process.env.PORT || 5000, function () {
            if (process.env.PORT) {
                console.log(`listening on port: ${process.env.PORT}`)
            } else {
                console.log("Listening on 5000");
            }
        });
    }
});

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

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.post('/submitOrder', (req, res) => {
    client.query(`insert into users (username) values ('${req.body.username}') returning *`, (err, result) => {
        if (err) {
            res.json(err);
            console.error(err);
        } else {
            let user = result.rows[0];
            res.json(user)
        }
    });
});

app.post("/createOrder", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Order Submitted!",
        details: req.body
    })
})

app.post("/submitPaidOrder", (req, res) => {
    console.log(req.body);
    client.query(`insert into users (username) values ('${req.body.username}') returning *`, (err, result) => {
        if (err) {
            res.json(err);
            console.error(err);
        } else {
            let user = result.rows[0];
            res.json(user)
        }
    });
    res.json("success?");
})

app.post("/serverTest", (req, res) => {
    console.log("Server Test Log Success");
    res.json("Success!");
})
