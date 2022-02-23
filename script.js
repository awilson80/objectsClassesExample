// Object Literal

const car = {
    model: 'Civic',
    make: 'Honda',
    color: 'Black',
    numDoors: 4,
    getDescription: function() {
      console.log('This car is a black Honda Civic, and it has 4 doors.');
    }
  };
  
  console.log(car);
  car.getDescription();
  
  // Constructor function
  
  function Dog(name, breed, furColor, collarColor) {
    this.name = name,
    this.breed = breed,
    this.furColor = furColor,
    this.collarColor = collarColor,
    this.greet = function() {
      console.log('Bark bark!');
    };
  };
  
  const lulu = new Dog('lulu', 'Cavalier King Charles Spaniel', 'Black and brown', 'Pink');
  console.log(lulu);
  lulu.greet();
  
  // Class
  
  class Person {
    constructor(firstName, lastName, age, hairColor) {
      this.firstName = firstName,
      this.lastName = lastName,
      this.age = age,
      this.hairColor = hairColor;
    }
    greet() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    };
  };
  
  const john = new Person('John', 'Smith', 33, 'Brown');
  console.log(john);
  john.greet();
  
  class Athlete extends Person {
    constructor(firstName, lastName, age, hairColor, sport) {
      super(firstName, lastName, age, hairColor),
      this.sport = sport;
    }
    saySport() {
      console.log(`I play ${this.sport}.`);
    };
  };
    
  const westbrook = new Athlete('Russell', 'Westbrook', 33, 'Black', 'Basketball');
  
  console.log(westbrook);
  westbrook.greet();
  westbrook.saySport();
  