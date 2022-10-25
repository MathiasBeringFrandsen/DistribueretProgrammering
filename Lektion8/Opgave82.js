function compareSort(compare){
    return (array) => {
        if (Array.isArray(array))
            return array.sort(compare);
    }
}

function compareLen(s1, s2){
    if (s1.length == s2.length){
        return 0;
    } else if (s1.length < s2.length){
        return -1;
    } else {
        return 1;
    }
}


function compareIgnoreCase(s1, s2){
    if (s1.toLowerCase() == s2.toLowerCase()){
        return 0;
    } else if (s1.toLowerCase() < s2.toLowerCase()){
        return -1;
    } else {
        return 1
    }
}

const lenSort = compareSort(compareLen);

const ignoreCaseSort = compareSort(compareIgnoreCase);

const testArray = ["Mads", "Jens", "Alin", "Bent", "Dennis", "Enni", "Frederik", "Gitte"];

console.log(lenSort(testArray));
console.log(ignoreCaseSort(testArray));
console.log();