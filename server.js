var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;

var app = express();


app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.listen(PORT, function() {
    console.log("Server listening on PORT" + PORT);
  });