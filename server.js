var express = require("express");
var path = require("path");
var app = express();
var api = require("./api/apiServer");

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.static(path.resolve(__dirname, "www")));
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), function () {
  console.log("listening to Port", app.get("port"));
});
