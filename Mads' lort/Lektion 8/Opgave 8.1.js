let names = "Karl Torben Emma Knud";
let lastNames = "Nielsen Poulsen Torbensen Knudsen";
let alder = "24 23 99 88";
let tlf = "32323232 75930284 75829102 23758321";

let personer = createPersons(names, lastNames, alder, tlf);
for (let person of personer){
    console.log(person);
}

//console.log(personer.find(u => u.telefon === '32323232').name);
console.log(personer.reduce((personMin, person) => person.alder < personMin ? person.alder : personMin, personer[0].alder));

attachID = personer.reduce((ID, person) => person.ID = ID + 1, 0);
console.log(personer[1]);

sortedpersons = personer.map(person => {return person.name}).sort((a, b) => a.localeCompare(b));
console.log(sortedpersons);
console.log(" ");

under30Persons = personer.filter(person => {return person.alder < 30}).map(person => {return person.name + ", " + person.telefon});
console.log(under30Persons);
console.log(" ");

stringArray = ["Jens", "Xenia", "Anders", "Mikkel", "Torben", "Mads"];


let lenSort = compareSort(compareLen);
let ignoreCaseSort = compareSort(compareIgnoreCase);

console.log(lenSort(stringArray));
console.log(ignoreCaseSort(stringArray));

function compareSort(compare){
    validate
    return (array) => array.sort(compare);
}

function compareLen(s1, s2){
    if (s1.length < s2.length){
        return -1;
    }
    else if (s1.length > s2.length){
        return 1;
    }
    else{
        return 0;
    }
}

function compareIgnoreCase(s1, s2){
    if (s1.toLowerCase() < s2.toLowerCase()){
        return -1;
    }
    else if(s1.toLowerCase() > s2.toLowerCase()){
        return 1;
    }
    else{
        return 0;
    }
}

function createPersons(names, lastNames, alder, tlf){
    let personer = [];
    let nameList = names.split(' ');
    let lastNamesList = lastNames.split(' ');
    let alderList = alder.split(' ');
    let tlfList = tlf.split(' ');
    for (let i = 0; i < nameList.length; i++){
        let person = {name : nameList[Math.floor(Math.random() * 4)], lastNames : lastNamesList[Math.floor(Math.random() * 4)], alder : alderList[Math.floor(Math.random() * 4)], telefon : tlfList[Math.floor(Math.random() * 4)]};
        personer[i] = person;
    }
    return personer;
}
