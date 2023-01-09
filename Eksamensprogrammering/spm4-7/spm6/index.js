let urlQoute = "https://www.tronalddump.io/random/quote"

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


async function hentCitat() {

    let result = await get(urlQoute);
    console.log(result);
    let citat = document.querySelector("#citater"); 
    citat.innerHTML = citat.innerHTML + "<p>" + "Tag: " + result.tags + " .Value: " + result.value + "</p>"; // ændrer div html i stedet for body, kom til at ændre på knappen også, så den mistede funktion

}
hentCitat()

document.querySelector("#id-trumpBtn").addEventListener("click", hentCitat);

//main();
