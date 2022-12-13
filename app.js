const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const newItems = ["Eat",
    "Code",
    "Sleep",
    "Repeat"
];
const newTasks = [];



const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log("Listening on port 3000...");
});

app.get("/", function (req, res) {
    const day = date();
    res.render('list', { pageTitle: day, newListItems: newItems });
});

app.get("/work", function (req, res) {
    res.render('list', { pageTitle: 'Work', newListItems: newTasks});
})

app.post("/", function (req, res) {
    const newItem = req.body.newItem;
    console.log(req.body);
    if (req.body.list == "Work") {
        newTasks.push(newItem);
        res.redirect("/work");
    }
    else {
        newItems.push(newItem);
        res.redirect("/");
    }
})


app.post("/work", function (req, res) {
    res.render('list', {pageTitle: 'Work', newListItems : newTasks});
})
