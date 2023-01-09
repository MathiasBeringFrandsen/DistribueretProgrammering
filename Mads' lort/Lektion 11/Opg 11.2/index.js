let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");

buttons[0].addEventListener("click", start);
buttons[1].addEventListener("click", stop);

let intervalID = [];

function start(){
    let før = new Date();
    intervalID.push(setInterval(function() {
    let nu = new Date();
    input.value = (nu.getTime() - før.getTime()) / 1000; }
    , 1));
}

function stop(){
    intervalID.forEach(id => {
        clearInterval(id);
    })
    intervalID = [];
}