// Object Literal

const phone = {
  brand: 'Samsung',
  color: 'blue',
  model: 'Galaxy S10',
  ring: function() {
    console.log('The phone is ringing');
  }
};
// console.log(phone);
// phone.ring();

function Dog(name, breed, furColor, size) {
  this.name = name,
  this.breed = breed,
  this.furColor = furColor,
  this.size = size;
  this.greet = function() {
    console.log('Bark bark!');
  }
};

const tracy = new Dog('Tracy', 'German Shepherd', 'Brown', 'Large');
// console.log(tracy);
// tracy.greet();

const lulu = new Dog('Lulu', 'Cavalier King Charles Spaniel', 'Black and brown', 'Medium');
// console.log(lulu);
// lulu.greet();

class Person {
  constructor(name, hairColor, job, eyeColor) {
    this.name = name,
    this.hairColor = hairColor,
    this.job = job,
    this.eyeColor = eyeColor;
  } 
    greet() {
    console.log(`Hello, my name is ${this.name}! I have ${this.eyeColor} eyes.`);
  };
};

const hema = new Person('Hema', 'Black', 'Junior Web Developer', 'Black');
console.log(hema);
hema.greet();

class Athlete extends Person {
  constructor(name, hairColor, job, eyeColor, sport) {
    super(name, hairColor, job, eyeColor),
    this.sport = sport;
  }
  saySport() {
    console.log(`I play ${this.sport}.`);
  };
};

const jordan = new Athlete('Michael Jordan', 'Bald', 'NBA Player', 'Brown', 'Basketball');

console.log(jordan);
jordan.saySport();
jordan.greet();
console.log(jordan.job);

