let biler = [
    {nummerplade : 23939503, vægt : 1000, mærke : "BMW", antalHjul : 6},
    {nummerplade : 38958394, vægt : 750, mærke : "Skoda", antalHjul : 7},
    {nummerplade : 45845848, vægt : 400, mærke : "Golf", antalHjul : 7},
    {nummerplade : 29392010, vægt : 500, mærke : "Audi", antalHjul : 4},
    {nummerplade : 39459384, vægt : 600, mærke : "Mercedes", antalHjul : 6}
];

let seksHjulede = biler.filter(bil => {return bil.antalHjul == 6});
console.log(seksHjulede);

let nummerplader = biler.map(bil => {return bil.nummerplade});
console.log(nummerplader);

let mindsteVægt = biler.reduce((bilMinVægt, bil) => bil.vægt < bilMinVægt ? bil.vægt : bilMinVægt, biler[0].vægt);
console.log(mindsteVægt);

let alleMedStørstAntalHjul = biler.filter(bil => {return bil.antalHjul == biler.reduce((bilHøjestAntal, bil) => bil.antalHjul > bilHøjestAntal ? bil.antalHjul : bilHøjestAntal, biler[0].antalHjul)})
console.log(alleMedStørstAntalHjul);


let størstAntalHjul = biler.reduce((bilStørstHjul, bil) => bil.antalHjul > bilStørstHjul ? bil.antalHjul : bilStørstHjul, biler[0].antalHjul);

let bilerMedHjulArray = [];
let aggregateHjul = biler.reduce((agg, b) => {
    if (typeof agg[b.antalHjul] === 'undefined'){
        agg[b.antalHjul] = 1;
    }
    else{
        agg[b.antalHjul] ++;
    }
    return agg;
}, bilerMedHjulArray);

console.log(aggregateHjul)
console.log();
