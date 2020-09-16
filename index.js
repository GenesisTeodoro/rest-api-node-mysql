const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ title: "Rest API Node JS." });
});

require("./app/routes/inventory.routes.js")(app);

app.listen('3000', () => {
    console.log('Server started on port 3000');
});
