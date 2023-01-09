//Opgave 2.1
console.log(max(2,5,9,10,21,3,5,2,19,19));
console.log(maxSmart(2,5,9,10,21,3,5,2,19,19));

//Opgave 2.1
let array = [2,5,20,1,2];
console.log(contains(array, 2));
console.log(contains(array, 4));

//Opgave 2.1
console.log(sum(2,5,9,10,21,3,5,2,19,19))

//Opgave 2.3
console.log(compare("mads", "Mads"));
console.log(compareLen("Mathias", "Mads"));
console.log(compareIgnoreCase("Mads", "Mathias"));
let list = ["Mathias", "mads", "Mads", "Preben", "Xenia"];
console.log(bubbelSort(list, compare));

//Opgave 2.4
const string = "Hej med med dig dit store dyr";
console.log(countWords(string));
console.log

//Opgave 2.5
let names = "Karl Torben Emma Knud";
let lastNames = "Nielsen Poulsen Torbensen Knudsen";
let emails = "jegersej132@gmail.com jegbrugeryahoo93@yahoo.dk yahooergodt@hotmail.dk gmailstinker@trashmail.com";
let tlf = "32323232 75930284 75829102 23758321"

let personer = createPersons(names, lastNames, emails, tlf);
for (let person of personer){
    console.log(person);
}
delete personer[1].name;
console.log(personer[1]);

//Opgave 2.6
let randomParanthesis = "{[()]}()";
console.log(checkParanthesis(randomParanthesis));

function checkParanthesis(randomParanthesis){
    let paranthesis = [];
    let randomParanthesisList = randomParanthesis.split("");
    for (let i = 0; i < randomParanthesis.length; i++){
        let char = paranthesis[paranthesis.length-1];
        if(randomParanthesisList[i] == "(" || randomParanthesisList[i] == "{" || randomParanthesisList[i] == "["){
            paranthesis.push(randomParanthesisList[i])
        }
        else if(char == "(" && randomParanthesisList[i] == ")"||
        char == "{" && randomParanthesisList[i] == "}" ||
        char == "[" && randomParanthesisList[i] == "]"
        ){
            paranthesis.pop();
        }
        else return false;
    }
    return paranthesis.length ? false:true;
}

function createPersons(names, lastNames, emails, tlf){
    let personer = [];
    let nameList = names.split(' ');
    let lastNamesList = lastNames.split(' ');
    let emailsList = emails.split(' ');
    let tlfList = tlf.split(' ');
    for (let i = 0; i < nameList.length; i++){
        let person = {name : nameList[Math.floor(Math.random() * 4)], lastNames : lastNamesList[Math.floor(Math.random() * 4)], email : emailsList[Math.floor(Math.random() * 4)], telefon : tlfList[Math.floor(Math.random() * 4)]};
        personer[i] = person;
    }
    return personer;
}


function countWords(s1){
    let map = {};
    let words = s1.split(' ');
    for (let i of words){
        if (map[i] != undefined){
            map[i] ++;
        }
        else{
            map[i] = 1;
        }
    }
    return map;
}

function bubbelSort(list, compare){
    for (let i = list.length - 1; i >= 0; i--){
        for (let j = 0; j <= i - 1; j++)
        if (compare(list[j], list[j+1]) == 1){
            swap(j);
        }
    }
    function swap(j){
        let temp = list[j+1];
        list[j+1] = list[j];
        list[j] = temp;
    }
    return list;
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

function compare(s1, s2){
    if (s1 < s2){
        return -1;
    }
    else if(s1 > s2){
        return 1;
    }
    else{
        return 0;
    }
}

function sum(...numbers){
    let sum = 0;
    for (let e of numbers){
        sum += e;
    }
    return sum;
}


function max(...numbers){
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

function maxSmart(...numbers){
    return Math.max(...numbers);
}

function contains(array, element){
    for (let e in array){
        if (array[e] === element){
            return true;
        }
    }
    return false;
}