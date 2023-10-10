const express = require("express");
const bodyParser = require("body-parser")
const { connectDB } = require("./db/dbconnection");
const route = require("./route/v1");
const config = require("./config/config")


const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use("/v1", route)
app.use((req, res, next) => {
    next(new error("Route not Found!"))
})

app.listen(config.port, () => {
    console.log(`server listning port number ${config.port}!`);
})