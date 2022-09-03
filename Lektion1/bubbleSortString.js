let array = ["Ib", "Børge", "John", "Markus", "Mads", "Magnus"];

for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array);

let element = "Ib"

let indeks = -1;
let left = 0;
let right = array.length - 1;
while (indeks == -1 && left <= right) {
    let middle = Math.trunc((left + right) / 2);
    let k = array[middle];
    if (k == element) {
        indeks = middle;
    } else if (k > element) {
        right = middle - 1;
    } else {
        left = middle + 1;
    }
}
console.log(indeks);

let ulige = [1, 3, 5, 7, 9];
let lige = [2, 4, 6, 8];
let flettet = []
let i = 0;
let j = 0;
while (i < ulige.length && j < lige.length) {
    if (ulige[i] < lige[j]) {
        flettet.push(ulige[i]);
        i++;
    } else {
        flettet.push(lige[j]);
        j++;
    }
}
while (i < ulige.length) {
    flettet.push(ulige[i]);
    i++;
}
while (j < lige.length) {
    flettet.push(lige[j]);
    j++;
}
console.log(flettet)