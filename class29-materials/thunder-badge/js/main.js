//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes

class Dome {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  desc() {
    console.log(
      `My name is ${this.name}, I am ${this.age} years old and I am a ${this.sex}`
    );
  }
}

let opk = new Dome("Alex", 30, "male");

console.log(opk);
