const express = require('express');
const app = express();
const sessions = require('express-session');
const pug = require('pug');

app.set('view engine', 'pug');
app.set("views", __dirname);

app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000*60*20 }, resave: false }));
//app.use(express.static(__dirname));
app.use(express.json());

let produkter = [{name : 'SAVAGE GEAR PARABELLUM CCS', price : 799, description : 'Parabellum er en kvalitets stang, hvor man virkelig får noget "value for money". På godt dansk: Her får man altså meget stang for pengene! Prøv den på yderkysten, eller i fjorden, og du vil ikke blive skuffet. Stængerne kommer i flere forskellige længder og kastevægte, så du kan vælge den der passer bedst til dit behov.', imgref : 'https://justfishing.dk/media/catalog/product/cache/1533b441f40effe878b055598028505a/9/0/90563_Savage-Gear-Parabellum_2.jpg', id : 1},
    {name : 'RAPALA NAUVO', price : 79, description : 'Rapala er kommet med et nyt blink, inspireret af de gode gamle klassikere. Og det virker! Nauvo er genial til fiskeri efter rovfisk som f.eks. gedder, ørred og laks. Den er ekstremt nem at fiske. Kast ud, og træk ind. Blinket vil med sin vukkende gang klare resten. Ved spinstop, vil blinket livligt flakse mod bunden, hvilket ofte trigger et hug fra rovfisken.', imgref : 'https://justfishing.dk/media/catalog/product/cache/1533b441f40effe878b055598028505a/r/a/rapala_nauvo_spoon.jpg', id : 2},
    {name : 'SAVAGE GEAR SG8 SPINNEHJUL', price : 799, description : 'Nyhed fra Savage Gear! Flagskibet indenfor deres hjul. SG8 spinnehjulet er dog i en klasse for sig selv, og består af de bedste komponenter på markedet! Huset er lavet i grafitcompositmateriale, som sikrer en gnidningsfri gang i et stærkt, robust og let design!', imgref : 'https://justfishing.dk/media/catalog/product/cache/1533b441f40effe878b055598028505a/S/G/SG8_1.jpg', id : 3}
    ];

app.get('/index', (request, response) => {
    let kurv = request.session.kurv;
    if (kurv == null){
        kurv = [];
    }

    let valuesForTemplate;
    valuesForTemplate= {kurv: kurv, produkter: produkter};
    response.render('index', valuesForTemplate);
});

app.post('/buy', (request, response) => {
    const { id } = request.body;
    console.log(id)
    let kurv = request.session.kurv;
    if (kurv == null) {
        kurv = [];
    }
    kurv.push(findProdukt(id));
    request.session.kurv = kurv
    response.status(201).send(['købt']);
})

function findProdukt(id){
    let foundProdukt = null;
    for (let produkt of produkter){
        if (produkt.id == id){
            foundProdukt = produkt;
        }
    }
    return foundProdukt;
}

app.listen(8000);

console.log('Lytter på port 8000 ...');