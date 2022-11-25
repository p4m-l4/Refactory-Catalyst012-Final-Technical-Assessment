const path = require("path");

const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("register");
});

startApp();

function startApp() {
  app.listen(8000, () => {
    console.log("App server listening on port 8000");
  });
}
