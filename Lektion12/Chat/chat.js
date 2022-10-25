const Url = 'https://beskedserver.azurewebsites.net/api/Beskeder/';
const rumUrl = 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/Rum1' ;

    async function get(url) {
        const respons = await fetch(url);
        if (respons.status !== 200) // OK
            throw new Error(respons.status);
        return await respons.json();
    }

    async function main(url) {
        try {
            let respons = await get(url);
            console.log(respons);
        } catch (fejl) {
            console.log(fejl);
        }
    }

    async function sendBesked(url, objekt) {
        const respons = await fetch(url, {
            method: "POST",
            body: JSON.stringify(objekt),
            headers: { 'Content-Type': 'application/json' }
        });
        if (respons.status !== 201) // Created
            throw new Error(respons.status);
        return await respons.json();
    }
    sendBesked()
    main(rumUrl);