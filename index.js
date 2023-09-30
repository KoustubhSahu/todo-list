import express from "express";
import bodyParser from "body-parser";

var todayList = ["Complete this web app Today"];
var workList = ["Complete this web app at Work"];
var date = new Date();
var currentYear = date.getFullYear();
const months = [
    "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentMonth = months[date.getMonth()];
var dayOfWeek = days[date.getDay()];
var dateOfMonth = date.getDate();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("today.ejs", {
        list: todayList,
        day: dayOfWeek,
        month: currentMonth,
        date: dateOfMonth,
        year: currentYear
    });
})

app.get("/work", function(req, res){
    res.render("work.ejs", {
        list: workList,
        year: currentYear
    });
})


app.post("/", function(req, res){
    todayList.push(req.body["newItem"]);
    res.render("today.ejs", {
        list: todayList,
        day: dayOfWeek,
        month: currentMonth,
        date: dateOfMonth,
        year: currentYear
    });
})

app.post("/work", function(req, res){
    workList.push(req.body["newItem"]);
    res.render("work.ejs", {
        list: workList,
        year: currentYear
    });
})





app.listen(port, function(){
    console.log("Server started at port " + port);
});
