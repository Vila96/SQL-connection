//DB

const mysql = require("mysql")

mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "databaseTest",
    port: "3306"
})

let chirpdb = {};

chirpdb.all = () => {

    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM testtable", (err, res) => {
            if(err) {
                console.log(err);
                return reject(err);
            } else {
                return resolve(results)
            }
        })
    })

}

chirpdb.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM testtable WHERE id = ?", [id], (err, res) => {
            if(err) {
                console.log(err);
                return reject(err);
            } else {
                return resolve(results[0])
            }
        })
    })
}


module.exports = chirpdb