var db = require("../models");

module.exports = (app) => {
    //posting a person
    app.post("/api/persons",(req, res) => {
        db.Person.create(
            req.body
        )
        .then((dbPerson) => {
            console.log("this is dbPerson " + dbPerson.first_Name);
            console.log("req.body " + dbPerson.id);
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
            console.log("this is a secret: " + dbSecret.kid_Name);
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