class Person {
    constructor(navn, gruppe) {
      this.navn = navn;
      this.gruppe = gruppe;
    }
    toString() {
      return this.navn;
    }
    group(){
      console.log(this.gruppe.toString());
    }
}

class Gruppe{
  constructor(navn){
    this.navn = navn;
    this.deltagere = [];
  }
  toString(){
    return this.navn;
  }
  addDeltager(person){
    this.deltagere.push(person);
  }
  removeDeltager(person){
    let index = this.deltagere.indexOf(person)
    this.deltagere.splice(index, 1)
  }
  printGroup(){
    console.log(this.deltagere.toString());
  }
}

const theWitcher = new Gruppe("The Witcher");

const p1 = new Person("Yennifer", theWitcher);
const p2 = new Person("Triss", theWitcher);
const p3 = new Person("Ciri", theWitcher);
const p4 = new Person("Jaskier", theWitcher);
const p5 = new Person("Vesemir", theWitcher);
const p6 = new Person("Lambert", theWitcher);
const p7 = new Person("Geralt", theWitcher);

theWitcher.addDeltager(p1);
theWitcher.addDeltager(p2);
theWitcher.addDeltager(p3);
theWitcher.addDeltager(p4);
theWitcher.addDeltager(p5);
theWitcher.addDeltager(p6);
theWitcher.addDeltager(p7);

theWitcher.printGroup();

theWitcher.removeDeltager(p6);

theWitcher.printGroup();

p3.group();