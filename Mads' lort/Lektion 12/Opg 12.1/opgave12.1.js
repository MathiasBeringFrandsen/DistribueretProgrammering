// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

const tbl = document.querySelector('table');
const earthquakes = [];


    async function main(url) {
        try {
            let respons = await get(url);
            for (let i = 0; i < respons.features.length; i++){
                let mag = respons.features[i].properties.mag;
                if (mag >= 5){
                    let place = respons.features[i].properties.place;
                    let time = respons.features[i].properties.time;
                    earthquakes.push({place, mag, time});
                }
            }
            earthquakes.sort((a, b) => a.mag - b.mag);
            createTable(earthquakes);
        
        } catch (fejl) {
            console.log(fejl);
        }
    }
    main(earthquakeUrl);

    function createTable(array){
        console.log(Object.keys(array[0]).length);
        for (let i = 0; i < array.length; i++){
            var tr = tbl.insertRow(i);
            for (let j = 0; j < Object.keys(array[i]).length; j++){
                var td = tr.insertCell(j);
                td.innerHTML = Object.values(array[i])[j];
            }
        }
    }
