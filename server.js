require("dotenv/config");
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = process.env.PORT || 4040;

app.set("view engine", "ejs").set();

app
	.use("/public", express.static(path.join(__dirname, "public")))
	.use(express.urlencoded());

app.get("/", (req, res) => {
	res.render("scheme");
});

app.listen(port, () => {
	console.log("listening to port: " + port);
});
