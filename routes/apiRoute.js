var db = require("../models");

module.exports = (app) => {
    //posting a person
    app.post("/api/persons",(req, res) => {
        db.Person.create(
            req.body
        )
        .then((dbPerson) => {
            res.json(dbPerson)
        })
    });

    //pulling back all persons
    app.get("/api/persons/", (req, res) => {
        db.Person.findAll({})
            .then((dbPerson)=> {
                res.json(dbPerson)
            });
    });

    //posting a secret
    app.post("/api/secret", (req, res) => {
        db.Secret.create(
            req.body
        )
        .then((dbSecret) => {
            res.json(dbSecret)
        })
    });

    //getting back all secrets with their user
    app.get("/api/secret/", (req, res) => {
        db.Secret.findAll({
            include: [db.Person]
        })
            .then((dbSecret)=> {
                res.json(dbSecret)
            });
    });

    

}