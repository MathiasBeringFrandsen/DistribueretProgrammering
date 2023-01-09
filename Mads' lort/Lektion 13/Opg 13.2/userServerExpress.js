// userServer.js
const { create } = require('domain');
const express = require('express');
const app = express();
const fetch = require('node-fetch');



// const userUrl = 'https://jsonplaceholder.typicode.com/users';
const beskedUrl = 'https://beskedserver.azurewebsites.net/api/Beskeder/';
const soegbeskedUrl = 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/';
const rumUrl = 'https://beskedserver.azurewebsites.net/api/chatRum/';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function genererTabel(users) {
    let html = '<table>';
    for (user of users) {
        html +=
            '<tr><td>' + user.id +
            '</td><td>' + user.tekst +
            '</td><td>' + user.chatrum +
            '</td></tr>\n';
    }
    html += '</table>';
    return html;
}

function createTable(array){
    let html = '<table>';
    for (let i = 0; i < array.length; i++){
        html += '<tr>'
        for (let j = 0; j < Object.keys(array[i]).length; j++){
            html += '<td>' + Object.values(array[i])[j] + '</td>';
        }
        html += '</tr>\n'
    }
    return html;
}

function createButtons(array){
    let html = ' '
    for (let i = 0; i < array.length; i++){
        html += '<button id="button" on>'
        for (let j = 0; j < Object.keys(array[i]).length; j++){
            html += Object.values(array[i])[j];
        }
        html += '</button> '
    }
    return html;
}

app.all('/', async (request, response) => {
    html = '<body>';
    html += '<h1>Nørskov\'s Chatting</h1>';
    let rum = await get(rumUrl);
    html += createButtons(rum);
    html += '</body>';
    response.send(html);
});

app.get('/beskeder', async (request, response) => {
    let array = await get(beskedUrl);
    response.send(createTable(array));
});

app.get('/beskeder/:rum', async (request, response) => {
    let array = await get(soegbeskedUrl);
    response.send(array);
})

app.get('/rum', async (request, response) => {
    let array = await get(rumUrl);
    response.send(array);
})

app.listen(8080);

console.log('Lytter på port 8080 ...');

async function visAlleRum() {
    let rumDiv = document.querySelector("#rum");
    let rum = await getRum();
    for (let r of rum) {
        rumDiv.innerHTML += "<input type=button onclick=\"visBeskederFor('" + r.navn + "')\" value=\"" + r.navn + "\"></input>";
    }
}

