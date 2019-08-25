const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/people.html"))
    });

    app.get("/addPerson", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/addPerson.html"))
    });
};