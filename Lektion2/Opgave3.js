function compare(s1, s2){
    if(s1 === s2){
        return 0;
    } else if (s1 < s2){
        return -1;
    } else {
        return 1
    }
}

console.log(compare("allan", "børge"));

function compareLen(s1, s2){
    if (s1.length == s2.length){
        return 0;
    } else if (s1.length < s2.length){
        return -1;
    } else {
        return 1;
    }
}

console.log(compareLen("Jens", "Jørgen"))

function compareIgnoreCase(s1, s2){
    if (s1.toLowerCase() == s2.toLowerCase()){
        return 0;
    } else if (s1.toLowerCase() < s2.toLowerCase()){
        return -1;
    } else {
        return 1
    }
}

console.log(compareIgnoreCase("allan", "Børge"));

function bubbleSort(array, compareMethod) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compareMethod(array[j], array[j+1]) == 1) {
                swap(i,j);
            }
        }
    }
    function swap(i, j) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }
}

let nameArray= ["Jan", "Alin", "Søren", "Ib", "bo", "mads", "Mads"];

bubbleSort(nameArray, compareLen);

console.log(nameArray);