const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.send("your first Web Application");
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})
