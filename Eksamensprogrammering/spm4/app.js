const { request } = require('express');
const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'pug');
app.set('views', __dirname + "/templates");

app.use(express.static(__dirname + "/filer"));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));

app.get('/', function (request, response) {
    if (request.session.personer === undefined){
        request.session.personer = [];
    }
    response.render("index", {personer : request.session.personer});
});

app.post('/', function (request, response) {
    if (request.session.personer === undefined){
        request.session.personer = [];
    }
    request.session.personer.push({name : request.body.navn, adresse: request.body.adresse});
    console.log(request.session.personer);
    response.redirect('/');
    response.status(201).end();
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
