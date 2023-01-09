class Bil{
    constructor(bilmaerke, pris){
        if (bilmaerke === undefined){
            throw new Error("Udfyld venligst bilmærke med gyldig værdi");
        }
        if (pris === undefined | bilmaerke === NaN){
            throw new Error("Udfyld venligst pris med gyldig værdi")
        }
        this.#bilmaerke = bilmaerke;
        this.#pris = pris;
        Bil.#antal++;
    }
    #bilmaerke;
    #pris;
    static #antal = 0;
    toString(){
        return "bilmærke: " + this.bilmaerke + ", " + this.pris + "kr";
    }
    static antalBiler(){
        return Bil.#antal;
    }

}

class Varevogn extends Bil{
    constructor(bilmaerke, pris, lasteevne){
        super(bilmaerke,pris)
        if (lasteevne === undefined | lasteevne === NaN){
            throw new Error("Udfyld venligst lasteevne med gyldig værdi")
        }
        this.#lasteevne = lasteevne;
    }
    #lasteevne;
    toString(){
        return super.toString + " lasteevne: " + lasteevne;
    }
}

let bil1 = new Bil("Skoda", 240000);
let bil2 = new Bil("Fiat", 24000);
let vogn1 = new Varevogn("Ford", 300000, 3000);

console.log(Bil.antalBiler());