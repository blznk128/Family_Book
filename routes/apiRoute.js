var db = require("../models");

module.exports = function (app) {
    app.post("/api/persons", function(req, res) {
        console.log(req.body);
        db.Person.create({
            first_Name: req.body.first_Name
        })
        .then(function(dbPerson){
            res.json(dbPerson)
            console.log("this is dbPost " + dbPerson)
        })
    })
}