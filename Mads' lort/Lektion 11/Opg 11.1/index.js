let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");

buttons[0].addEventListener("click", start);
buttons[1].addEventListener("click", stop);

let intervalID = [];

function start(){
    intervalID.push(setInterval(function() {
    let nu = new Date();
    input.value = nu.getHours() + ":" + nu.getMinutes() + ":" + nu.getSeconds();}
, 1000));
}

function stop(){
    intervalID.forEach(id => {
        clearInterval(id);
    })
    intervalID = [];
}