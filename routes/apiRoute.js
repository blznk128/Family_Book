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

    app.get("/api/persons/", (req, res) => {
        db.Person.findAll({})
            .then((dbPerson)=> {
                res.json(dbPerson)
            });
    });

    //posting a kid
    app.post("/api/kid", (req, res) => {
        db.Kid.create(
            req.body
        )
        .then((dbKid) => {
            console.log("this is kids name: " + dbKid.kid_Name);
            res.json(dbKid)
        })
    });

    app.get("/api/kid/", (req, res) => {
        db.Kid.findAll({})
            .then((dbKid)=> {
                res.json(dbKid)
            });
    });

    

}