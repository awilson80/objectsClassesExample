// Object Literal 

const dog = {
    name: 'Lulu',
    breed: 'Cavalier King Charles Spaniel',
    furColor: 'Black and brown',
    collarColor: 'Pink'
}

// console.log(dog);

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

const lulu = new Dog('Lulu', 'Cavalier King Charles Spaniel', 'black and brown', 'pink');
lulu.greet();
console.log(lulu);
console.log(lulu.breed);

const oliver = new Dog('Oliver', 'Cocker Spaniel', 'brown', 'gray');
oliver.greet();
console.log(oliver);
console.log(oliver.collarColor);

// Class

class Person {
    constructor(firstName, lastName, age, hairColor) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.hairColor = hairColor
    }
    greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};

const john = new Person('John', 'Doe', '23', 'Brown');
console.log(john);
john.greet();

// Extended class

class Athlete extends Person {
    constructor(firstName, lastName, age, hairColor, sport) {
    super(firstName, lastName, age, hairColor),
    this.sport = sport
    }
    greetSport() {
        console.log(`I play ${this.sport}.`);
    }
};

const westbrook = new Athlete('Russel', 'Westbrook', '33', 'Black', 'Basketball');
console.log(westbrook);
westbrook.greet();
westbrook.greetSport();
