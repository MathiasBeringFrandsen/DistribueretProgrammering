const personer = [
{ navn: "Jens Hansen", alder: 45, tlf: 21334455},
{ navn: "Magnus Magnusson", alder: 27, tlf: 44335566},
{ navn: "Mads Madsen", alder: 30, tlf: 11005634},
{ navn: "Alin Valentino", alder: 16, tlf: 12343212},
{ navn: "Kristina Kristinasen", alder: 28, tlf: 57395638}];


const personWithNumber = personer.find((person) => person.tlf === 21334455);
console.log(personWithNumber);

const personWithLowestAge = personer.reduce((lowestAge, person) => Math.min(lowestAge, person.alder), personer[0].alder);
console.log(personWithLowestAge);

const attachID = personer.reduce((ID, person) => person.ID = ID + 1, 0);
console.log(personer);

const sortedArray = personer.map(person => person.navn).sort((a,b) => a.localeCompare(b));
console.log(sortedArray);

const sortedArrayNameNumber = personer.filter(person => person.alder < 30).map((person) =>  ({navn: person.navn, tlf: person.tlf}));
console.log(sortedArrayNameNumber);