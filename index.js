const express = require("express");
const app = express();

const port =  8080;

const path = require("path");

app.set("view Engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/colors", (req,res) =>{
     res.render("color.ejs");
     console.log("Request Received");
});

app.get("/home", (req,res) =>{
     res.render("home.ejs");
     console.log("Request Received");
});

app.get("/cal", (req,res) =>{
     res.render("cal.ejs");
     console.log("Request Received");
});

app.listen(port,(req,res)=>{
   console.log(`app is listening ${port}`);
});

app.get("/apple", (req,res)=>{
     res.send("this is for demo");
     console.log("Request Received");
});