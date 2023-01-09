const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require('body-parser');
const { render } = require("pug");
let path = require("path");
const { Cookie } = require("express-session");


app.set("views", path.join(__dirname, "views/"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates/"));

app.use(express.static("filer"));
app.use(express.json());
app.use(session({ secret: 'hemmelig', saveUninitialized: true, cookie: {maxAge: 1000 * 60 * 60 * 24}, resave: true},));
app.use(bodyParser.urlencoded({ extended: true }));

// Ovenstående er samme opsætning som spm4, der er der lidt flere kommentarer

// man kan lave et init storage ved at erklære det inde i serveren

let personer = [];

app.get('/', function (request, response) {
    response.render("index", { personer: personer });
});

app.post('/add', function (request, response) {
    let navn = request.body.navn;
    let mobil = request.body.mobil;
    if (navn != "" && mobil != "") {
        personer.push({ navn: navn, mobil: mobil })
    }
    response.render("index", { personer: personer }); // index er index.pug
});

app.post('/update', function (request, response) { // put i stedet for post vil måske være mere rigtigt?
    let navn = request.body.navn;
    let mobil = request.body.mobil;
    let update = request.body.update;
    if (navn != "" && mobil != "") {
        personer[update].navn = navn;
        personer[update].mobil = mobil;
    }
    response.render("index", { personer: personer });
});

app.listen(8080);

console.log('Lytter på port 8080 ...');


// Den udleverede spm4.zip indeholder en express.js-applikation, hvor filerne index.js, index.pug og app.js skal 
// modificeres for at lave nedenstående webapplikation. 
 
// Webapplikationen skal vise en webside med to tekstfelter til indtastning af navn og adresse, en ’Tilføj 
// person’ knap og en liste over personer som en table eller evt. en ul.  
// Når der trykkes på knappen, skal listen opdateres. Desuden skal navn og adresse sendes til serveren. 
// Implementer ovenstående ved at udvide app.js og index.pug, samt lave et program i index.js, der tilføjer en 
// eventhandler til knappen.  
// Personerne skal gemmes i session (express-session) og websiden skal genereres med pug  på serveren. 
// Overvej, hvad der sker ved en Get, hvis personerne ikke gemmes i session. 
 
// Gør rede for Session. 