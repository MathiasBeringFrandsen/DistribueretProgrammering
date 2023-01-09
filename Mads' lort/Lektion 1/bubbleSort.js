let list = [4,9,1,15,2,30];
console.log(bubbelSort(list));
console.log("Fundet på plads: " + binarySearch(list,15))
let list2 = [5,2,9,30,10,20,1];
console.log(bubbelSort(list2));
totalMerge(list, list2);
printPrimeNumbers(200);

function bubbelSort(list){
    for (let i = list.length - 1; i >= 0; i--){
        for (let j = 0; j <= i - 1; j++)
        if (list[j] > list[j + 1]){
            swap(i,j);
        }
    }
    function swap(i,j){
        let temp = list[j+1];
        list[j+1] = list[j];
        list[j] = temp;
    }
    return list;
}

function binarySearch(list, target){
let indeks = -1;
let left = 0;
let right = list.length - 1;
while (indeks == -1 && left <= right){
    let middle = Math.trunc((left + right) / 2);
    let k = list[middle];
    if (k == target){
        indeks = middle;
    }else if(k > target){
        right = middle + 1;
    }else{
        left = middle + 1;
    }
}
return indeks;
}

function totalMerge(list1, list2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < list1.length && j < list2.length){
        let e1 = list1[i];
        let e2 = list2[j];
        if (e1 <= e2){
            result.push(e1);
            i += true;
        }
        else{
            result.push(e2);
            j += true;
        }
        
    }

    while(i < list1.length){
        result.push(list1[i]);
        i += true;
    }

    while(j < list2.length){
        result.push(list2[j]);
        j += true;
    }

    console.log(result);
}

function printPrimeNumbers(roof){
    let i = 0;
    while (i <= roof){
        if(i == 3 || i == 7 || i == 2 || i == 5){
            console.log(i);
            i++;
        }
        else if(i % 2 == 0){
            i++;
        }

        else if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 9 == 0){
            i++;
        }
        else{
            console.log(i)
            i++;
        }
    }


}

