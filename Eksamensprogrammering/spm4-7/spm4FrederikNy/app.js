const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require('body-parser'); // Er ikke med i "egen løsning", men kun her kan man se personer gemt i liste
const { render } = require("pug"); // Er ikke med i "egen løsning", men kun her kan man se personer gemt i liste
let path = require("path");

app.set("views", path.join(__dirname, "views/"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates/"));

app.use(express.static("filer"));
app.use(express.json());
app.use(session({ secret: 'hemmelig', saveUninitialized: true, resave: true }));
app.use(bodyParser.urlencoded({ extended: true })); // Bør nok undersøge hvad bodyParser gør

app.get('/', function (request, response) {
    let personer = request.session.personer; // Henter personerne fra serversiden. Refererer til personer i pug filen
    if (personer == undefined) { // skal være på undefined i stedet for null? - Emil
        personer = [];
    }
    request.session.personer = personer;
    response.render("index", { personer: personer }); // Viser personerne. { personer: personer } opretter et nyt objekt? index er index.pug. Personer til højre er ovenstående linje
});

app.post('/addPerson', function (request, response) {
    let personer = request.session.personer; // Henter personerne fra serversiden. Refererer til personer i pug filen
    if (personer == undefined) {
        personer = [];
    }
    request.session.personer = personer;
    let navn = request.body.navn; // Ser på input feltet i pug-filen
    let adresse = request.body.adresse; // Ser på input feltet i pug-filen
    if (navn != undefined && adresse != undefined) { // Skal stå som tom streng i stedet for undefined?
        personer.push({ navn: navn, adresse: adresse }) // Tilføjer den oprettede person
    }
    response.render("index", { personer: personer}); // Viser personerne. { personer: personer } opretter et nyt objekt?
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