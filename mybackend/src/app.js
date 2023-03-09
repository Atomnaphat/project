const express = require("express");
const path = require("path");
const app = express();
require("./mongodb/connection");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.get("/", (req, res) =>{
    res.send("hello form the ATOM")
});

app.listen(port, () => {
    console.log(`server is running at port on ${port}`);
})
