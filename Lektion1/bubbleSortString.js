let list = ["Ib", "Børge", "John", "Markus", "Mads", "Magnus"];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        }
    }
}

console.log(list);

let target = "Ib"

let indeks = -1;
let left = 0;
let right = list.length - 1;
while (indeks == -1 && left <= right) {
    let middle = Math.trunc((left + right) / 2);
    let k = list[middle];
    if (k == target) {
        indeks = middle;
    } else if (k > target) {
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