function max(array){
    let max = array[0];
    for (let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

console.log(max([1,2,3,4,5,6,7,8]))

function contains(array, element){
    return array.includes(element);
}

console.log(contains([1,2,3,4,5,6,7,8], 2))

function sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sum([1,2,3,4,5,6,7,8,9]))