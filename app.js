
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
// const bodyParser = require("body-parser");

app.set("layout", "layouts/layout");
app.use(expressLayouts);

// app sets and use
// app.use(bodyParser.json({limit: '10mb', extended: true}));
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
  res.render("index");
});
// app.get("/blog", function(req, res){
//   res.render("blog");
// });


var port = process.env.PORT;
if(port == null || port == " "){
    port = 3000;
}

app.listen(port, function(){
   console.log("Your Server Has Started!");
});
