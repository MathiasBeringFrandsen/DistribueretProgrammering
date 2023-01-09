class Bil {
    #bilmærke; //Private
    #pris; //private
    constructor(bilmærke, pris){
            if (typeof bilmærke !== 'string'){
                throw console.error("Bilmærke er ikke af typen string");
            }
            else if(typeof pris !== 'number'){
                throw console.error("Pris er ikke af typen number");
            }
            else{
                this.#bilmærke = bilmærke;
                this.#pris = pris;
                this.id = ++Bil.counter;
            }
        }

    toString(){
        return "Bil af mærket: " + this.#bilmærke +". Bilens pris er: " + this.#pris +",-";
    }
}

class Varevogn extends Bil {
    lasteevne;
    constructor(lasteevne, bilmærke, pris){
        if (typeof lasteevne !== 'number' && lasteevne > 0){
            throw console.error("Lasteevne er ikke af typen number, ellers er den nul");
        }
        super(bilmærke, pris);
        this.lasteevne = lasteevne;
    }

    toString(){
        return super.toString() + ". Lasteevnen er på: " + this.lasteevne +"kg";
    }
}

Bil.counter = 0;
let bil = new Bil("Audi", 200000.0);
let bil2 = new Bil("Audi", 500000);
let varevogn = new Varevogn(1000000, "Scania", 340000);
let varevogn2 = new Varevogn("20", "Polo", 20000);

let biler = [];
biler.push(bil);
biler.push(bil2);
biler.push(varevogn);
biler.push(varevogn2);

biler.forEach((bil) => {
    console.log(bil.id);
    console.log(bil.toString());
})