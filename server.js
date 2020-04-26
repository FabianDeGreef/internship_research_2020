var express = require("express");
var path = require("path");
var app = express();
var jsonServer = require("json-server");

app.use(express.static(path.resolve(__dirname, "www")));
app.use("/", jsonServer.router("./api/data.json"));
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
  console.log("listening to Port", app.get("port"));
});
