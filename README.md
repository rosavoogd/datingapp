![petconnectlogo](https://user-images.githubusercontent.com/60507750/83246758-e19a9680-a1a2-11ea-9701-b8fb969637a3.png)


## Job Story 

When I’m feeling alone and am looking for a new pet to keep me company, I want to be able to filter the pets based on their needs, So I can decide if I am capable of providing the pet with everything they will need to live a happy life.

## Application

## Database 

## Installing

For this project I am using node.js and npm 
You will need to install these with the code below after cloning this project 

```
npm install 
```

### Dependencies 

* body-parser
* ejs
* expess
* express-session
* slug
* mongoDB

### DevDependensies 

* nodemon 
* eslint





https://rosavoogd.github.io/datingapp/



## Probeerseltjes:

```js


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
```