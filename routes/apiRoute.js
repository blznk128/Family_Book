var db = require("../models");

module.exports = (app) => {
    app.post("/api/persons",(req, res) => {
        console.log(req.body);
        db.Person.create({
            first_Name: req.body.first_Name,
            last_Name: req.body.last_Name
        })
        .then((dbPerson) => {
            console.log("this is dbPerson " + dbPerson.first_Name);
            console.log("this is last name: " + dbPerson.last_Name);
            res.json(dbPerson)
        })
    });

    app.get("/api/persons/", (req, res) => {
        db.Person.findAll({})
            .then((dbPerson)=> {
                res.json(dbPerson)
            });
    });
}