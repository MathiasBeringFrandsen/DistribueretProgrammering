function hashtags() {
  let hashtag = "";
  for (let i = 0; i < 7; i++) {
    hashtag = hashtag + "#";
    console.log(hashtag);
  }
}

function fizzBuzz() {
  let number = 1;
  while (number <= 100) {
    if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
    number++;
  }
}

const score = {visitors : 0, home: 0};

console.log(score);
score.visitors = 1;
console.log(score);