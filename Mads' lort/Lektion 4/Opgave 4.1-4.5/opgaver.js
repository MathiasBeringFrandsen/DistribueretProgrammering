// Tilføj kode for opgave 4.1 - 4.5 her!

//Opgave 4.1
let ps = document.querySelectorAll('p');
for (let p of ps){
    p.className = "red";
}

//Opgave 4.2
let heads = document.querySelectorAll('h1+*+*');
for (let h of heads){
    h.style.color ='brown';
}

//Opgave 4.3
let list = document.getElementsByTagName('ul')[0];
for (let i = 0; i < list.children.length; i++)
if (i % 2 === 0){
    list.children[i].style.color = 'lightblue';
}

//Opgave 4.4
let becomeUnderHeader = document.querySelectorAll('h1+p');
for (let underHeader of becomeUnderHeader){
    underHeader.outerHTML = "<h2>" + underHeader.innerHTML + "</h2>";
}

//Opgave 4.5
let headers = document.querySelectorAll('h1');
for (let header of headers){
    header.outerHTML = "<h1><a href="
}