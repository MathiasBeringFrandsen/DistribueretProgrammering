let textString = "jeg er en glad lille cowboy er jeg";
let wordArray = textString.split(" ")
let map = {};
for (let i of wordArray){
    if (map[i] == undefined){
        map[i] = 1
    } else {
        map[i] = map[i] + 1;
    }
}

console.log(map);
