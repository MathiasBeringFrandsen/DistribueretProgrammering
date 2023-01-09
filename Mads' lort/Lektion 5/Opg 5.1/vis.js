//Opgave 5.1
let inputs = document.querySelectorAll('input');

for (let input of inputs){
    input.outerHTML = "<label for ="+ input.id + ">" + input.id + "</label>" + input.outerHTML;
}
inputs = document.querySelectorAll('input');
let dagsdato = new Date();

inputs[0].onclick = () => event.target.value = Math.floor(Math.random()*100);
inputs[1].onclick = () => event.target.value = dagsdato.getHours() + ":" + dagsdato.getMinutes(2);


//Opgave 5.2

