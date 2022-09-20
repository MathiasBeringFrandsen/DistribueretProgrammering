let values = [];
const savedDice = [];
const diceContainer = document.getElementById("dice");
const rollCount = document.getElementById("roll-count");
let rolls = 0;

function roll() {
    rolls++;
    rollCount.innerText = rolls;
    
    diceContainer.innerHTML = ""; 
    values = []
    for (let i = 0; i < (5 - savedDice.length); i++) {
        values[i] = ((Math.floor(Math.random() * 6)) + 1)
    };
    console.log(values);
    savedDice.forEach(savedDie => {
        
        diceContainer.append(savedDie);
    })
    values.forEach(diceResult => {
        const divDie = document.createElement("div");
        divDie.className ="die";
        
        const diePicture = document.createElement("img");
        diePicture.src = `Terning_${diceResult}.png`;
        
        divDie.append(diePicture);
        diceContainer.append(divDie);

        divDie.addEventListener('click', () => 
        {
            divDie.className += " saved"
            savedDice.push(divDie)
        })
    })
}