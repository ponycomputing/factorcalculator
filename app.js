var express = require("express");
var app = express();
var mainctrl = require("./controllers/mainctrl.js");

app.use(express.static("public"));
//template engine
app.set("view engine","ejs");

//router list
app.get("/"			,mainctrl.showIndex);
app.get("/:number"	,mainctrl.showResult);

app.listen(3000);