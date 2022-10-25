// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
const tbl = document.querySelector('table');

    async function get(url) {
        const respons = await fetch(url);
        if (respons.status !== 200) // OK
            throw new Error(respons.status);
        return await respons.json();
    }

    async function main(url) {
        try {
            const quakeArray = [];
            let respons = await get(url);
            console.log(respons);
            for (let i = 0; i < respons.features.length; i++){
                if (respons.features[i].properties.mag >= 5){
                    let mag = respons.features[i].properties.mag;
                    let place = respons.features[i].properties.place;
                    let time = respons.features[i].properties.time;
                    quakeArray.push({place, mag});
                }
            }
            quakeArray.sort((a,b) => a.mag - b.mag)
            console.log(quakeArray);

            for (let earthquake of quakeArray){
                tbl.innerHTML += "<tr><td>"+earthquake.place +"</td><td>" + earthquake.mag + "</td></tr>"
            }
        } catch (fejl) {
            console.log(fejl);
        }
    }
    main(earthquakeUrl);