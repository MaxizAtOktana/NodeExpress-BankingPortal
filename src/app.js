// @ts-check
const express = require("express");
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

const app = express();

const viewsDirectoryPath = path.join(__dirname, "views");
app.set("views", viewsDirectoryPath);
app.set("view engine", "ejs");

const publicDirectoryPath = path.join(__dirname, "public");
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Index"
  });
});

app.listen(3000, () => {
  console.log("PS Project Running on port 3000!");
});
