function range(start, end, step = 1){
    const arrayOfNumbers = [];
    for (let i = start; i != end + step; i += step){
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
}

function sum(array){
    let totalSum = 0;
    for(let i of array){
        totalSum += i;
    }
    return totalSum;
}


function reverseArray(array){
    const revArray = [];
    for(let i of array) {
        revArray.unshift(i);
    }
    return revArray;
}

function reverseArrayInPlace(array){
    for (let i = 0; i < array.length - 1; i++){
        array.unshift(array.pop());
    }
}

let numberArray = [1, 2, 3, 4, 5, 6];
// console.log(reverseArray(numberArray));
reverseArrayInPlace(numberArray);
console.log(numberArray);