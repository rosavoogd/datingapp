const express = require("express");
const app = express();
const port = 5500;

// 1. set templating engine
app.set ("view engine", "ejs");
app.set ("views", "view");

app.get("/", home);
app.get("/about", about);
app.get("/animals", animals);

function home (req, res) {
    res.send ("Hello World!");
}

function about(req, res) {
    res.send("Hello About");
}

// 2. Send data with the template
function animals(req, res){
    res.render("list.ejs", {data: list});
}

// 3. List of animals as an array of objects
const list = [
    {
        name: "Bob",
        species:"Cat",
        bio: "Tabby Cat, 3 years old"
    },
    {
        name: "Dolly",
        species: "Dog",
        bio: "Labrador, 2 years old"
    },
    {
        name: "Pip",
        species: "Bird",
        bio: "Cockatoo, 1 year old"
    }
];


app.listen(port, function() {
    console.log("The server is running!");
});

//server is geschreven, in de terminal doe je node index.js en hij runt
//nu kan ik npm start doen om de server en nodemon te starten 