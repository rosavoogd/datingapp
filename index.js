
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
var url = process.env.DB_HOST 
console.log(url);
mongo.MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client){
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
    .use(express.static('static'))
    .use('/datingapp', express.static('static'))
    
    .get('/', getHome)

    // .get('/login', getLogin)
    // .post('/login', postLogin)

    // .get('/register', getRegister)
    // .post('/register', postRegister)

    // .get('/messages', getMessages)
    // .get('/messagesId', getMessagesId)
    // .post('/messagesId', postMessagesId)

    // .get('/appointments', getAppointments)

    .get('/profile', getProfile)
    .post('/profile', postProfile)
    
    
    .listen(port, function () {
        console.log("The server is running!");
        'http://localhost:${PORT}'
    });

/* SESSIONS
================================================================================================== */

    // var session = db.getMongo().startSession();
    // db = session.getDatabase(db.getName());



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
function getHome(req, res, next) {
    console.log("hallo")
    db.collection('datingapp').find().toArray(done)
  
    function done(err, data) {
      if (err) {
        next(err)
      } else {
        console.log(data)
        res.render('index.ejs');
      }
    }
    
}

/* LOGIN
================================================================================================== */
// function getLogin(req, res) {
//     res.render('/login');
// }
//     function postLogin(req, res) {
//     /**
//      * 1. Check of er een email in req.body bestaat (zo niet error)
//      * 2. Haal gebruiker op uit de database op basis van email - find mongo 
//      * 3. Check of gebruiker bestaat, zo niet error
//      * 4. Sla gebruiker op in sessie
//      */
//     res.redirect('/');
// }

/* REGISTER
================================================================================================== */
// function getRegister(req, res) {
//     res.render('/register');
// }
//     function postRegister(req, res) {
//     /**
//      * 1. Haal gebruikers uit DB waar email == req.body.email
//      * 2. Kijk of die gebruiker bestaat, zo niet error
//      * 3. Sla de gebruiker op in de DB, en laat het form profile invullen
//      * 4. Log de gebruiker in, (sla op in sessie)
//      */
//     res.redirect('/');
// }

/* MESSAGES
================================================================================================== */
function getMessages(req, res) {
    res.render('/messages');
    /**
     * 1. Haal messages uit de DB van de gebruikers sessie
     * 2. Sorteer de messages op datum, recent eerst
     */
}

/* MESSAGES:ID
================================================================================================== */
// function getMessagesId(req, res) {
//     res.render('/messagesId');
// }
//     function postMessagesId(req, res) {
//     /**
//     * 1. De gebruiker verstuurd het bericht
//     * 2. Bestaat de huidige chat
//     * 3. Sla bericht op in huidige chat
//     * 4. Ververs chat pagina (redirect naar /message/ + huidig ID
//     * */
// }


/* APPOINTMENTS
================================================================================================== */
// function getAppointments(req, res) {
//     res.render('/appointments');
//     /**
//      * 1. Haal appointments voor de gebruiker uit de database, zijn er geen appointments -> "no appointments yet"
//      * 2. Weergeef de appointments en sorteer op dichtsbijzijnde datum
//      */
// }


/* PROFILE
================================================================================================== */
function getProfile(req, res) {
    res.render('profile.ejs');
}
    function postProfile(req,res) {
        //helped by NathanNeelis 
        const filterAnimal1 = req.body.cat;
        req.session.filter = filterAnimal1;
        /**
         * 1. check of het profiel met de preferences al een keer is ingevuld
         * 2. Als het al is ingevuld, toon de preferences, zo niet, toon een leeg form
         * 3. Als er aanpassingen gemaakt worden en de gebruiker klikt op save, onthoud deze sessie
         * 4. Ververs profiel pagina (redirect naar /profile/)
         */

         const done = (filterAnimal) => {
             if (dataFilter) {
                 console.log(req.session.filter);
                 res.render('profile.ejs', {
                     dataFilter: req.session.filter,
                 });
             } else {
                 res.render('profile.ejs', {   
                 });
             }
         };
         done(filterAnimal1);

         res.redirect('profile.ejs');
    }
