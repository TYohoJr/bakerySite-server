const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const path = require('path');
var pg = require('pg');
require('dotenv').config();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

var conString = process.env.ELEPHANTSQL_URL || "postgres://postgres:5432@localhost/postgres";

// Server will only listen if it can connect to the DB
var client = new pg.Client(conString);
client.connect((err) => {
    if (err) {
        return console.error(err);
    } else {
        console.log('successfully connected to postgres DB');
        app.listen(process.env.PORT || 5000, function () {
            // Log which port the server is listening on
            // If process.env.PORT === 5000 then the server is running locally
            console.log(`listening on port: ${process.env.PORT}`)
        });
    }
});

// Send index.html on load of the page
app.get("/", (req, res) => {
    res.sendFile("index.html")
})

// Send the order to the DB
app.post("/createOrder", (req, res) => {
    // Simplified data structure
    let form = req.body;
    console.log(form);
    // Check to see if email already has an order
    client.query(`select * from orders where email = '${form.info.email}'`, (err, duplicateResult) => {
        if (err) {
            console.error(err);
            res.json({
                message: `Order Failed: ${err}`
            });
        } else if (duplicateResult.rows[0]) {
            res.json({
                message: "An order is already associated with this email.\nUse the 'Order Lookup' tool to view the order details"
            })
        } else {
            // If no duplicate then save order to DB
            client.query(`insert into orders (name, email, number, address_street, address_city, address_state, address_zip, date_needed, layer_1_size, layer_2_size, layer_3_size, layer_4_size, flavor, frosting_fondant, delivery, plates, comments, contact, time, cookie_style, cookie_amount, cupcake_style, cupcake_amount) values ('${form.info.username}', '${form.info.email}', '${form.info.number}', '${form.info.addressStreet}', '${form.info.addressCity}', '${form.info.addressState}', '${form.info.addressZip}', '${form.info.dateNeeded}', '${form.order.layerOneSize}', '${form.order.layerTwoSize}', '${form.order.layerThreeSize}', '${form.order.layerFourSize}', '${form.order.flavor}', '${form.order.frostingFondant}', '${form.order.delivery}', '${form.order.plates}', '${form.order.additionalComments}', '${form.info.contact}', '${form.time}', '${form.order.cookieStyle}', '${form.order.cookieAmount}', '${form.order.cupcakeStyle}', '${form.order.cupcakeAmount}') returning *`, (err, result) => {
                if (err) {
                    console.error(err);
                    res.json({
                        message: `Order failed: ${err}`
                    });
                } else {
                    // If no error return success message to the front end
                    let user = result.rows[0];
                    res.json({
                        message: `Order successfully created for ${user.email}\nYou will be contacted after your order is reviewed.`
                    })
                }
            });
        }
    });
})

// Search the DB for an order associated with the email they send
app.post("/orderLookup", (req, res) => {
    client.query(`select * from orders where email = '${req.body.email}'`, (err, result) => {
        if (err) {
            res.json(err);
            console.error(err);
        } else {
            let user = result.rows[0];
            res.json(user)
        }
    });
})

// Check if the email already has an order associated with it
app.post("/checkDuplicate", (req, res) => {
    client.query(`select * from orders where email = '${req.body.email}'`, (err, duplicateResult) => {
        if (err) {
            console.error(err);
            res.json({
                duplicateCheck: true,
                message: `Order Failed: ${err}`
            });
        // The email already has an associated order
        } else if (duplicateResult.rows[0]) {
            res.json({
                duplicateCheck: true,
                message: "An order is already associated with this email.\nUse the 'Order Lookup' tool to view the order details"
            })
        // No order found connected to that email. Proceed.
        } else {
            res.json({
                message: "no duplicate"
            })
        }
    })
})