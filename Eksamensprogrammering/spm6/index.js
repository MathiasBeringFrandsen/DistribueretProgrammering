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

async function getRandomQuote() {
    let quote = await get("https://www.tronalddump.io/random/quote");
    document.getElementById("result").innerHTML = quote.value;
    quote.tags.forEach(tag => {
        const tagLink = document.createElement("a");
        tagLink.innerHTML = tag;
        tagLink.onclick = () => getQuotes(tag);
        document.getElementById("tag").appendChild(tagLink);
    });

}

async function getQuotes(tag) {
    document.getElementById("tagQuotes").innerHTML = "";
    const quotes = await get("https://www.tronalddump.io/search/quote?tag=" + tag);
    quotes._embedded.quotes.forEach(quote => {
        const newQuote = document.createElement("div");
        newQuote.innerHTML = quote.value;
        document.getElementById("tagQuotes").appendChild(newQuote);
    })
    console.log(quotes);
}

getRandomQuote();