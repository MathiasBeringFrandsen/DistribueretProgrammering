async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}

let urlQoute = "https://www.tronalddump.io/random/quote"

function hentCitater(nr) {
    return new Promise(async function (resolve, reject) {
        let result = await get(urlQoute);
        console.log(result);
        let citat = document.querySelector("#citater");
        let tal = Math.trunc(Math.random() * 10); // til nedenstående if, for at teste om promise virker
        if (tal%2==0) { // Bruges til at tjekke, om promises virker eller ej, ved at ændre på result(linket)
            result = undefined;
        }
        setTimeout(afslut, 500);
        function afslut() {
            if (result != undefined) { // Hvordan if tjekker man?
                citat.innerHTML = citat.innerHTML + "<p>" + "nr: " + nr + " Tag: " + result.tags + " .Value: " + result.value + "</p>";
                resolve(`${nr} OK!`)
            }
            else {
                citat.innerHTML = citat.innerHTML + "<p>" + "nr: " + nr + " fejl!" + "</p>";
                reject(`${nr} Ikke OK!`);
            }
        }
    })
}

function proevTreGange() { // Hvordan tjekker man om det virker?
    Promise.all([hentCitater(1), hentCitater(2), hentCitater(3)]).then((resultat) => {
        console.log('Resultater, fejl og exceptions:');
        console.log(resultat);
    })
}

document.querySelector("#id-trumpBtn").addEventListener("click", proevTreGange)

