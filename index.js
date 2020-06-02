const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const slug = require("slug");
const port = 5500;
const session = require('express-session');

//MONGODB
var mongo = require("mongodb");
require(dotenv).config();

var db = null;
var url = "mongodb://" + process.env.DB_HOST + ":" + process.env.DB_PORT;

mongo.MongoClient.connect(url, function (err, client){
    if (err) throw err
    db = client.db(process.env.DB_NAME);
})

app.use(session({
  'secret': 'SESSIONS_SECRET'
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


/* FORM ASSIGNMENT */
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

// MONGDODB FIND
function database(req, res, next){
    db.collection('data').find().toArray(done)

    function done(err, data){
        if (err){
            next (err)
        }
        else{
            res.render('list', {data: data})
        }
    }
}

//MONGODB UPDATE
function change(req, res, next){
    db.collection('data').updateOne({
        _id: ObjectID(req.body.description)
    }, done)

    function done(err, data){
        if (err){
            next (err)
        }
        else{
            res.redirect('/' + data.insertedID)
        }
    }

}

//MONGODB ADDANIMAL
function addanimal(req, res, next){
    db.collection('data').insertOne({
        name: req.body.name,
        species: req.body.species,
        bio: req.body.bio,
        age: req.body.age
    },done)
    function done(err, data){
        if (err){
            next(err)
        } else{
            res.redirect('/' + data.insertedID)
        }
    }
}

//SESSIONS SET
function signup(req, res, next){

    function onhash(hash){


            function oninstert(err){
                if (err){
                next (err)
            } else {
            req.session.user = {username: username}
            res.redirect('/')
            }
        }
    }
}


const counter = 0;

/**************************************/
/* THE ANIMALS IN AN ARRAY AS OBJECTS */
/**************************************/
const data = [
    {
        name: "Bob",
        species:"Cat",
        bio: "Tabby Cat",
        age: 3,
        environment:["Apartment, Garden, Balcony, Farm"],
        money: 100,
        src: "static-website/img/bob.jpeg"
        
    },
    {
        name: "Dolly",
        species: "Dog",
        bio: "Labrador",
        age: 2,
        environment:["Garden, Balcony, Farm"],
        money: 200,
        src: "static-website/img/dolly.jpg"
    },
    {
        name: "Pip",
        species: "Bird",
        bio: "Cockatoo",
        age: 1,
        environment:["Apartment, Garden, Balcony, Farm"],
        money: 50,
        src: "static-website/img/bob.jpeg"
    }
];


app.listen(port, function() {
    console.log("The server is running!");
});

//server is geschreven, in de terminal doe je node index.js en hij runt
//nu kan ik npm start doen om de server en nodemon te starten 
