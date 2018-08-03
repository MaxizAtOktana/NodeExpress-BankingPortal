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

const accountData = fs.readFileSync(path.join("src", "json", "accounts.json"), {
  encoding: "UTF-8"
});
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(path.join("src", "json", "users.json"), {
  encoding: "UTF-8"
});
const users = JSON.parse(userData);

app.get("/", (req, res) => {
  const options = {
    title: "Account Summary",
    accounts
  };
  res.render("index", options);
});

app.get("/savings", (req, res) => {
  const options = {
    account: accounts.saving
  };
  res.render("account", options);
});

app.get("/checking", (req, res) => {
  const options = {
    account: accounts.checking
  };
  res.render("account", options);
});

app.get("/credit", (req, res) => {
  const options = {
    account: accounts.credit
  };
  res.render("account", options);
});

app.get("/profile", (req, res) => {
  const options = {
    user: users[0]
  };
  res.render("profile", options);
});

app.listen(3000, () => {
  console.log("PS Project Running on port 3000!");
});
