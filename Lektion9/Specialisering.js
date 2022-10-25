// opgave10.1.js
class Person {
  constructor(navn) {
    this.navn = navn;
  }
  toString() {
    return this.navn;
  }
  equals(p) {
    let same = false;
    if (p instanceof Person && p.navn == this.navn) {
      same = true;
    }
    return same;
  }
  static compare(p1, p2) {
    if (p1.navn === p2.navn) {
      return 0;
    } else if (p1.navn < p2.navn) {
      return 1;
    } else {
      return -1;
    }
  }
}

class Studerende extends Person {
  constructor(navn, id) {
    super(navn);
    this.id = id;
  }
  toString() {
    return super.toString() + ": " + this.id;
  }
  equals(s) {
    let same = false;
    if (s instanceof Studerende && s.toString() == this.toString()) {
      same = true;
    }
    return same;
  }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let p3 = new Person("Enni");
let p4 = new Person("Frede");
let p5 = new Person("Kristian");
let p6 = new Person("Jakob");
let p7 = new Person("Sara");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);
let s3 = new Studerende("Astrid", 123);

let liste = [p1, p2, s1, s2];

class Kat {
  constructor(navn) {
    this.navn = navn;
  }
  toString() {
    return this.navn;
  }
}

let k1 = new Kat("Mulle");
let k2 = new Kat("Felix");
let k3 = new Kat("Gadaffi");

arr = [p1, p2, p3, p4, p5, p6, p7, s1, s2, s3, k1, k2, k3];

arr.sort(Person.compare);

console.log(arr.toString());

