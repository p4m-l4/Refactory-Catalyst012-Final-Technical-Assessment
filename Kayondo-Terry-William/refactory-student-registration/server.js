const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Refactory Student Registration System");
});

startApp();

function startApp() {
  app.listen(8000, () => {
    console.log("App server listening on port 8000");
  });
}
