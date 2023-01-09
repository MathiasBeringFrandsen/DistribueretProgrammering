// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCYiyvfP4b0GVb--4HqN9kmBhDkbTZ3A9s",
  authDomain: "chatserver-a5d0c.firebaseapp.com",
  projectId: "chatserver-a5d0c",
  storageBucket: "chatserver-a5d0c.appspot.com",
  messagingSenderId: "996258408624",
  appId: "1:996258408624:web:f48445f59b6e16c626b375",
  measurementId: "G-6DJC8TBGDQ"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

import express from 'express';
import path from 'path';
import pug from 'pug';
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.use(express.json());
app.use(express.urlencoded({extended: true}));


async function getBeskeder(){
    let beskedCol = collection(db, 'beskeder')
    let beskeder = await getDocs(beskedCol);

    let beskedListe = beskeder.docs.map(doc =>{
        let data = doc.data();
        data.docId = doc.id;
        return data;
    })
    return beskedListe;
}

async function addBesked(besked){
    addDoc(collection(db, 'beskeder'), besked);
}


app.get('/beskeder', async (request, response) =>{
    const besked = await getBeskeder();
    response.send(besked);
})


app.get('/index', async (request, response) =>{
    const besked = await getBeskeder();
    response.render('index', {beskeder: besked})
})

app.get('/addBeskedPage', async (request, response) => {
    response.render('addBesked');
})

app.post('/addBesked', async (request, response) => {
    let {navn, tekst} = request.body;
    await addBesked({navn, tekst});
    response.redirect('/index')
})


app.listen(8888);

