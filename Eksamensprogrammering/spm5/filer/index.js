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

function addOnClick() {
    const btn = document.querySelector('.tilfoj');
    btn.addEventListener("click", async () => {
      let navn = document.getElementById("navn").value;
      let tlfnummer = document.getElementById("tlfnummer").value;
      await post("http://localhost:8080/", {navn : navn, tlfnummer : tlfnummer});
      window.location.href = "http://localhost:8080/";
    });
  }

  function changenumber() {
    
  }
  
  addOnClick();