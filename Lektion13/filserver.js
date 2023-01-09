// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import express from 'express';
import pug from 'pug';

const app = express()

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7FrEdAfBNoN-No20Cjd5m0g6n_f6c7jk",
  authDomain: "chatserver-6438d.firebaseapp.com",
  projectId: "chatserver-6438d",
  storageBucket: "chatserver-6438d.appspot.com",
  messagingSenderId: "13989862850",
  appId: "1:13989862850:web:9648e9dfbabcafc942ca5b"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

const port = 8080;

async function getRum() {
    let rumCol=collection(db, 'Chatrum');
    let rum = await getDocs(rumCol);

    let rumList = rum.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return rumList;
}

app.get('/chatrum', async (req, res) => {
    const rum = await getRum();
    res.send(rum);
})




// app.use(express.json());
// app.get('/beskeder', (request, response) => {
//     response.status(200);
//     response.send(beskeder);
// });

// app.get('/beskeder/:chatrum', (request, response) => {
//     response.status(200);
//     let result = [];
//     for (let besked of beskeder) {
//         if (besked.chatrum == request.params.chatrum) {
//             result.push(besked);
//         }
//     }
//     response.send(result);
// });

// app.get('/chatrum', (request, response) => {
//     response.status(200);
//     response.send(chatRum);
// });

// app.post('/beskeder', (request, response) => {
//     console.log(request.body);
//     //løkke, der finder største id i beskeder
//     // sæt størsteid + 1 på besked
//     beskeder.push(request.body);
//     response.status(201);
//     response.send("Added");
// });

app.listen(port);
console.log('Lytter på port ' + port + ' ...');