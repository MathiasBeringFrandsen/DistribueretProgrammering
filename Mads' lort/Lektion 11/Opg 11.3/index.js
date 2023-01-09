async function checkPromises() {
    return new Promise(function (resolve, reject) {
        let id = Math.trunc(Math.random() * 11);
        setTimeout(afslut, 1000);
        function afslut() {
            if (id <= 7) resolve("Resolved! " + id);
            if (id <= 9) reject("Rejected! " + id);
        }
        if (id === 10) {
            throw ("Av, av! Exception");
        }
    })
}

Promise.all([checkPromises(), checkPromises(), checkPromises(), checkPromises()])
.then(resultat => console.log("Resultat: " + resultat))
.catch(error => console.log("Error: " + error));

Promise.any([checkPromises(), checkPromises(), checkPromises(), checkPromises()])
.then(resultat => console.log("Resultat: " + resultat))
.catch(error => console.log("Error: " + error));

Promise.allSettled([checkPromises(), checkPromises(), checkPromises(), checkPromises()])
.then((results) => results.forEach((result) => console.log("Resultat: " + result.status)))
