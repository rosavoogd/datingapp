const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const slug = require("slug");
const port = 5500;

// 1. set templating engine
app.set ("view engine", "ejs");
app.set ("views", "view");

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", form);

app.get("/", home);
app.get("/about", about);
app.get("/animal", animal);
app.get("/files/:type", files);
app.get("/settings", form);

function home (req, res) {
    res.send ("Hello World!");
}

function about(req, res) {
    res.send("Hello About");
}

// 2. Send data with the template
function animal(req, res){
    res.render('list', {data: data});
}

function files(req, res){
    console.log(req.params);
    res.send('files');
}

function form(req, res){
    res.render('settings');
}

/**************************************/
/* THE ANIMALS IN AN ARRAY AS OBJECTS */
/**************************************/
const data = [
    {
        name: "Bob",
        species:"Cat",
        bio: "Tabby Cat, 3 years old",
        img: "static-website/img/bob.jpeg"
    },
    {
        name: "Dolly",
        species: "Dog",
        bio: "Labrador, 2 years old",
        img: "static-website/img/bob.jpeg"
    },
    {
        name: "Pip",
        species: "Bird",
        bio: "Cockatoo, 1 year old",
        img: "static-website/img/bob.jpeg"
    }
];

/****************/
/* MAKE IT  HTML*/
/****************/

// function profiles(req, res){
//     let doc = "<!doctype html>";
//     let length = data.length;
//     let index = -1;
//     let profile;

//     doc += "<title>My Profile</title>";
//     doc += "<h1>Profile</h1>";

//     while (++index < length) {
//         profile = data[index];
//         doc += '<h2><a href="/' + profile.id + '">' +
//         profile.title + '<a/></h2>';
//     }
// }
// profiles(req,res){
//     res.render('list.ejs', {data: data})
// }


// for (i = 0; i < animals.length; i++){
//     const newanimal = document.createElement("article");
//     newanimal.setAttribute("id", animals[i].name);

//     const newimg 
// }





app.listen(port, function() {
    console.log("The server is running!");
});

//server is geschreven, in de terminal doe je node index.js en hij runt
//nu kan ik npm start doen om de server en nodemon te starten 