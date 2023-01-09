// opgave10.1.js
class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p) {return p.constructor.name === 'Person' && p.navn === this.navn;}
    static compare(p1, p2) {if (p1.navn === p2.navn){return 0;} else {return p1.navn > p2.navn ? 1 : -1 }};
}

class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) {return s.constructor.name === 'Studerende' && s.navn === this.navn && s.id === this.id;};
}

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}


let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);
let k1 = new Kat("Mis");
let k2 = new Kat("Alfred");
console.log(p1.equals(p2));
console.log(s1.equals(s1));
console.log(Person.compare(p1,p2));

let liste = [p1, p2, s1, s2];
liste.sort(Person.compare);
liste.forEach(person => {
    console.log(person.navn);
})

let liste2 = [p1, p2, s1, s2, k1, k2];
liste2.sort(Person.compare);
liste2.forEach(væsen => {
    console.log(væsen.navn);
})



