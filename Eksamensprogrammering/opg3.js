async function gaetTalISyttenTabel(){
let randomNumber = new Promise(function(resolve, reject){
    setTimeout(() => {console.log("Done waiting"); }, Math.floor(Math.random() * 3000));
    return Math.floor(Math.random() * 200000) % 17 == 0;
})
}

console.log(await gaetTalISyttenTabel());