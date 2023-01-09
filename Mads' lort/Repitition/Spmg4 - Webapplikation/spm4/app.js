const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.use(express.static('filer'));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));

app.get('/', function (request, response) {
    let gemtePersoner = request.session.gemtePersoner;
    if (gemtePersoner == null){
        gemtePersoner = [];
    }
    valuesForTemplate= {gemtePersoner : gemtePersoner};
    response.render('index', valuesForTemplate);
});

app.post('/', function (request, response) {
    const navn = request.body.navn;
    const adresse = request.body.adresse;
    let gemtePersoner = request.session.gemtePersoner;
    if (gemtePersoner == null) {
        gemtePersoner = [];
    }
    let person = {navn : navn, adresse : adresse};
    gemtePersoner.push(person);
    request.session.gemtePersoner = gemtePersoner;
    response.status(201).send(['Gemt']);
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
