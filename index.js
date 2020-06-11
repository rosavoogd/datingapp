
// Helped by Rijk for the structure and base
require('dotenv').config();

var express = require("express");
var bodyParser = require("body-parser");
var slug = require("slug");
var session = require('express-session');
var mongo = require("mongodb");

const port = 5500;

/* DATABASE 
================================================================================================== */
var db = null;
var url = "mongodb://" + process.env.DB_HOST + ":" + process.env.DB_PORT;

mongo.MongoClient.connect(url, function (err, client){
    if (err) throw err
    db = client.db(process.env.DB_NAME);
})

/* EXPRESS SETUP
================================================================================================== */
express()
    .set("view engine", "ejs")
    .set("views", "view")
    .use(session({
        'secret': 'SESSIONS_SECRET'
    }))
    .use(bodyParser.urlencoded({extended: true}))
    .use(express.static('static-website'))
    .use('/datingapp', express.static('static-website'))
    .get('/', checkAuth, getHome)

    .get('/login', getLogin)
    .post('/login', postLogin)

    .get('/register', getRegister)
    .post('/register', postRegister)

    .get('/messages', getMessages)
    .get('/messagesId', getMessagesId)
    .post('/messagesId', postMessagesId)

    .get('/appointments', getAppointments)

    .get('/profile', getProfile)
    .post('/profile', postProfile)
    


    
    .listen(port, function () {
        console.log("The server is running!");
    });

/* MIDDLEWARE
================================================================================================== */
function checkAuth(req, res, next) {
    // Check of de gebruiker bestaat in de sessie
    var loggedIn = true;

    if (loggedIn) {
        return next();
    }

    return res.redirect('/login');
}

/* HOMEPAGE 
================================================================================================== */
function getHome(req, res) {
    /*
        1. Haal de gebruiker op uit de sessie
        2. Haal de dieren op uit de DB
        3. Filter de dieren (array.filter())
        4. Stuur dieren in res.render
    */
    var dieren = [];
    res.render('index', { data: dieren });
}

/* LOGIN
================================================================================================== */
function getLogin(req, res) {
    res.render('login');
}

function postLogin(req, res) {
    /**
     * 1. Check of er een email in req.body bestaat (zo niet error)
     * 2. Haal gebruiker op uit de database op basis van email - find mongo 
     * 3. Check of gebruiker bestaat, zo niet error
     * 4. Sla gebruiker op in sessie
     */
    res.redirect('/');
}

/* REGISTER
================================================================================================== */
function getRegister(req, res) {
    res.render('register');
}

function postRegister(req, res) {
    /**
     * 1. Haal gebruikers uit DB waar email == req.body.email
     * 2. Kijk of die gebruiker bestaat, zo niet error
     * 3. Sla de gebruiker op in de DB
     * 4. Log de gebruiker in, (sla op in sessie)
     */

    res.redirect('/');
}

/* MESSAGES
================================================================================================== */
function getMessages(req, res) {
    res.render('messages');

    /**
     * 1. Check of de gebruikers sessie al messages heeft in de DB
     * 2. Haal messages uit de DB van de gebruikers sessie
     * 3. Sorteer de messages op datum, recent eerst
     */
}

/* MESSAGES:ID
================================================================================================== */
function getMessagesId(req, res) {
    res.render('messagesId');
}

function postMessagesId(req, res) {
   
    /**
    * 1. Maak een typveld voor het bericht 
    * 2. Check of er een bericht getyped is.
    * 3. Is er een bericht getyed en wordt er op send gedrukt, verstuur bericht 
    * 
    * */
}


/* APPOINTMENTS
================================================================================================== */
function getAppointments(req, res) {
    res.render('appointments');

    /**
     * 1. Check of er appointments voor de gebruiker aanwezig zijn in de database
     * 2. Haal appointments voor de gebruiker uit de database
     * 3. Weergeef de appointments en sorteer op dichtsbijzijnde datum
     */
}



/* PROFILE
================================================================================================== */
function getProfile(req,res) {
    res.render('profile');
}

    function postProfile(req,res) {

        /**
         * 1. check of het profiel met de preferences al een keer is ingevuld
         * 2. Als het al is ingevuld, toon de preferences, zo niet, toon een leeg form
         * 3. Als er aanpassingen gemaakt worden en de gebruiker klikt op save, onthoud deze sessie
         */
    }

