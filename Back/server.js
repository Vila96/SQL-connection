//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////GENERAL////////
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")
const port = process.env.PORT || 5001;
//Imports
const apiRouter = require("./routes");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "databaseTest",
    port: "3306"
});

app.use(cors())
app.use(express.json());


app.use("/api/chirps", apiRouter);

//CONNECTION TO DB (SQL)
connection.connect((err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("connected")
    }
});

app.listen(port);

console.log("App is listening on port " + port);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This section works but is only as a showcase
////////CREATE TABLE IN DB////////
/*connection.query(
    "CREATE TABLE IF NOT EXISTS testTable(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, test VARCHAR(255) NOT NULL)", (err, rows) => {
        if(err) {
            throw err
        } else {
            console.log("DATA SUCCESFULLY SENT");
            console.log(rows);
        }
    }
);*/

////////INSERT DATA INTO TABLE////////
/*
connection.query(
    "INSERT INTO testTable(id, test, test2) VALUES (1, 'hello I am a test', 'testing')", (err, rows) => {
        if(err) {
            throw err
        } else {
            console.log("DATA SUCCESFULLY SENT");
            console.log(rows)
        }
    }
)
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This section is the one used by Front
//////// CRUD ////////

app.post("/create", (req, res) => {
    console.log(req.body)
    const test1 = req.body.testDb;
    const test2 = req.body.test2Db;

    connection.query(
        "INSERT INTO testtable (test, test2) VALUES (?, ?)", [test1, test2],
            (err, result) => {
                if(err) {
                    console.log(err)
                } else {
                    res.send("Values inserted")
                }
            }
    )

})

app.get("/get", (req, res) => {
    connection.query("SELECT * FROM testtable", 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

app.put("/update", (req, res) => {
    const id = req.body.id;
    const test1 = req.body.test;


    connection.query("UPDATE testtable SET test = ? WHERE id = ?", [test1, id], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
    })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    connection.query("DELETE FROM testtable WHERE id = ?", [id],
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})