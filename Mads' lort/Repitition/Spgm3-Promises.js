function gaetTalISyttenTabel(){
    return new Promise(function (resolve, reject) {
        let tid = Math.ceil(Math.random() * 3);
        let randomNumber = Math.trunc(Math.random() * 2000);
        setTimeout(afslut, tid * 1000);
        function afslut() {
            if (randomNumber % 17 == 0) resolve(`${randomNumber} OK!`);
            else reject(`${randomNumber} Ikke OK!`);
        }
    });
}

function proevAntalGange(antalGange){
    let syttenTabelListe = [];
    for (let i = 0; i < antalGange; i++){
        syttenTabelListe.push(gaetTalISyttenTabel());
    }
    Promise.allSettled(syttenTabelListe).then(resultat => resultat.forEach((result) => {if(result.status != 'rejected')console.log(result.value)}))
    .catch(fejl => console.log("Fejl/Exception: " + fejl));
}

// async function proevAntalGange(antalGange){
//     let syttenTabelListe = [];
//     for (let i = 0; i < antalGange; i++){
//         syttenTabelListe.push(gaetTalISyttenTabel());
//     }
//     try {
//         let resolved = await Promise.any(syttenTabelListe);
//         console.log(resolved);
//     }
//     catch(fejl){
//         console.log("Det duede sgu ikke");
//     }
// }

proevAntalGange(30);