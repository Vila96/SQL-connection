//ROUTES
const express = require("express");
const routes = express.Router();

//Imports
const db = require("../db")


////////ROUTES////////
routes.get("/", async (req, res, next) => {
    
    try {
        let results = await db.all();
        res.json(results)
    } catch(e) {
        console.log(e);
        res.sendStatus(500)
    }

});

routes.get("/:id", async (req, res, next) => {
    
    try {
        let results = await db.one(req.params.id);
        res.json(results)
    } catch(e) {
        console.log(e);
        res.sendStatus(500)
    }

});

module.exports = routes;