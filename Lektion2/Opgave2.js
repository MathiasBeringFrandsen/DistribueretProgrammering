function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
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

function binarySearch(array, element) {

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
    return indeks;
}

let bob = [14,2,6,7,3434,775,23,12,4,545];
bubbleSort(bob);
console.log(bob)