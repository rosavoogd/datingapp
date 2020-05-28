const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const slug = require("slug");
const port = 5500;
const session = require('express-session')

const app = express()
app.use(session({
  'secret': '343ji43j4n3jn4jk3n'
}))

// set templating engine
app.set ("view engine", "ejs");
app.set ("views", "view");

// add bodyParser
app.use(bodyParser.urlencoded({extended: true}));
// add static files 
app.use(express.static('static-website'))
app.use('/datingapp', express.static('static-website'))

function home (req, res) {
    res.send ("Hello World!");
}

app.get("/", home);

function about(req, res) {
    res.send("Hello About");
}

app.get("/about", about);

function animal(req, res){
    res.render('list', {data: data});
}

app.get("/animal", animal);

function files(req, res){
    console.log(req.params);
    res.send('files');
}

app.get("/files/:type", files);

/*******************/
/* FORM ASSIGNMENT */
/*******************/
function form(req, res){
    res.render('settings');
}

app.get("/settings", form);

function settings(req, res){
    var id = slug (req.body.species).toLowerCase();
    
    data.push({
        id: id,
        name: req.body.name,
        species: req.body.species,
        bio: req.body.bio,
        age: req.body.age,
        environment: req.body.environment,

        img: req.body.img
    });

    res.redirect('/' + name);
}

app.post("/", settings);






/***********************/
/* TEMPLATE ASSIGNMENT */
/***********************/



/**************************************/
/* THE ANIMALS IN AN ARRAY AS OBJECTS */
/**************************************/
const data = [
    {
        name: "Bob",
        species:"Cat",
        bio: "Tabby Cat",
        age: 3,
        environment:"Apartment, Garden, Balcony, Farm",
        money: 100,
        img: "../static-website/img/bob.jpeg"
        
    },
    {
        name: "Dolly",
        species: "Dog",
        bio: "Labrador",
        age: 2,
        environment:"Garden, Balcony, Farm",
        money: 200,
        img: "../static-website/img/bob.jpeg"
    },
    {
        name: "Pip",
        species: "Bird",
        bio: "Cockatoo",
        age: 1,
        environment:"Apartment, Garden, Balcony, Farm",
        money: 50,
        img: "../static-website/img/bob.jpeg"
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

/*************/
/* NORMAL JS */
/*************/

var slider = document.getElementById('money');
var input = document.getElementById('input');

function sliderdata(){
    slider.value=input.value;
};

function sliderinput(){
    input.value=slider.value
};

input.addEventListener("change", sliderdata);
input.addEventListener("change", sliderinput);