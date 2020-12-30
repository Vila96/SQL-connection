////////GENERAL////////
const express = require("express");
const app = express();
const mysql = require("mysql");
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "databaseTest",
    port: "3306"
})

app.use(express.json())

////////CONNECTION TO DB(SQL)////////

connection.connect((err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("connected")
    }
})

app.listen(port);

console.log("App is listening on port " + port)

////////CREATE TABLE////////
connection.query(
    "CREATE TABLE IF NOT EXISTS testTable(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, test VARCHAR(255) NOT NULL)", (err, rows) => {
        if(err) {
            throw err
        } else {
            console.log("DATA SUCCESFULLY SENT");
            console.log(rows)
        }
    }
)

////////INSERT DATA INTO TABLE////////
/*
connection.query(
    "INSERT INTO testTable(id, test) VALUES (1, 'hello I am a test')", (err, rows) => {
        if(err) {
            throw err
        } else {
            console.log("DATA SUCCESFULLY SENT");
            console.log(rows)
        }
    }
)
*/


////////GET DATA FROM TABLE////////

connection.query(
    "SELECT * FROM testtable", (err, rows) => {
        if(err) {
            throw err
        } else {
            console.log("DATA SUCCESFULLY TAKEN");
            console.log(rows)
        }
    }
)


