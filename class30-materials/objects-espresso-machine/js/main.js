//Create an espresso machine class that makes machines with 4 properties and 3 methods

// class espressoMachine {
//   constructor(a, b, c, d) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;
//   }
//   e() {}
//   f() {}
//   g() {}
// }

// class EspressoMachine {
//   constructor(color, make, model, price) {
//     this.color = color;
//     this.make = make;
//     this.model = model;
//     this.price = price;
//   }

//   turnOn() {
//     console.log(`Good day, I am now on!`);
//   }

//   steam() {
//     console.log(`ITTSSS SUMMER SALLEEE 50%%%`);
//   }

//   brew() {
//     console.log(`Good stuff coming your way`);
//   }
// }

// let gaggia = new EspressoMachine("red", "Gaggia", "Classic Pro", 400);

// function convertToCelsius(temperature) {
//   let celsius;

//   return celsius;
// }

// function weatherInfo(temperature) {
//   let c = (temperature - 32) * (5 / 9);
//   console.log(c);
//   if (c < 0) {
//     return c + " is freezing temperature";
//   } else {
//     return c + " is above freezing temperature";
//   }
// }

// // console.log(convertToCelsius(50));
// console.log(weatherInfo(23));

// function howManyDalmations(number) {
//   let dogs = [
//     "Hardly any",
//     "More than a handful!",
//     "Woah that's a lot of dogs!",
//     "101 DALMATIONS!!!",
//   ];

//   let respond =
//     number <= 10
//       ? dogs[0]
//       : number <= 50
//       ? dogs[1]
//       : number >= 101
//       ? dogs[3]
//       : dogs[2];

//   return respond;
// }

// console.log(howManyDalmations(101));

function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return `${a} % ${b} + ${b} % ${a}`;
  }
}

let i = myFirstKata(67, "bye");

console.log(i);
