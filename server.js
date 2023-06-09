// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("<h1> Hello Satyajit </h1>");
})

app.get("/contact", function(request, response){
    response.send("This is my contact page");
})

app.get("/about", function(request, response){
    response.send("This is my about page");
})


app.listen(3000, function(){
    console.log("server started on port 3000");
});
