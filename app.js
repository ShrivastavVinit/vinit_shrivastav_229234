const express=require("express");
const app=express();
var bodyparser=require("body-parser");


app.use(bodyparser.urlencoded({extended:false}));

//routing to get welcome page

app.get("/welcome",function(req,resp){
    resp.sendFile("public/welcome.html",{root:__dirname})  
});


app.listen(8000);
console.log("server running at port 8000");