var express = require("express");
var path = require("path");
var app = express();

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

app.use(express.static(path.resolve(__dirname, "www")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/www/index.html"));
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
  console.log("listening to Port", app.get("port"));
});
