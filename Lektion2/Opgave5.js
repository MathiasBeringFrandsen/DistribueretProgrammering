let personer = [p1 = { navn: "Jens Hansen", tlf: 21334455, mail: "Jens@Hansen.com" },
p2 = { navn: "Magnus Magnusson", tlf: 44335566, mail: "Magnus@Magnusson.com" },
p3 = { navn: "Mads Madsen", tlf: 11005634, mail: "Mads@Madsen.com" }];


console.log(personer[0]);
console.log(personer[1]);
console.log(personer[2]);
console.log("")

personer[1].navn = "Mads Mikkelsen";
personer[0].tlf = 12345678;
personer[2].mail = "Oh@Hi.Mark";

console.log(personer[0]);
console.log(personer[1]);
console.log(personer[2]);