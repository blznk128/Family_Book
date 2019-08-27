const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//routes
require("./routes/apiRoute")(app);
require("./routes/htmlRoute.js")(app);
require("./routes/kidApi.js")(app);

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log("App is on port: " + PORT);
    });
});