/* 
Hamster
attributes:

owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:

wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price

*/

class Hamster{
    constructor(owner,name,price){
        this.owner = owner;
        this.name = name;
        this.price = price;
    }

    setOwner(owner) {
        this.owner = owner
        console.log(`${this.name} has a new owner ${this.owner}!`)
    }

    wheelRun(){
        console.log("squeak squeak!") 
    } 
   
    eatFood(){
        console.log("nibble nibble!") 
    } 
      
    getPrice(){
        return this.price
    } 
}


/* 
Person
attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0

methods:

getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - {push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
*/

class Person{
    constructor(name, age, height, weight,mood, bankAccount){
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.mood = mood; 
      this.hamsters = [];
      this.bankAccount = bankAccount;
    }
    getName() {
        return `${this.name}`;
    }
    getAge(){
    return `${this.age}`;
    } 
    getWeight(){
        return`${this.weight}kg`;
    }
    getHeight(){
        return `${this.height}cm`;
    }
    greet(){
        console.log(`Hey, there! ${this.name}`);
    }
    eat(){
       this.weight++;
       this.mood++;
        return this;
    }
    exercise(){
         this.weight--;
         return this;
    }

    ageUp(){
        this.age++, 
        this.height++, 
        this.mood--, 
        this.bankAccount+=10;
        return this;
    }

    buyHamster(hamster){
         hamster.setOwner(this.name);
         this.hamsters.push(hamster);
         this.mood += 10, 
         this.bankAccount -= hamster.getPrice();
        return this;
    }
}

/* Create a Story with your Person class
Feel free to update or add methods to automate some of these tasks.

Instantiate a new Person named Timmy
Age Timmy five years
At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
Age Timmy 9 years
Create a hamster named "Gus"
Set Gus's owner to the string "Timmy"
Have Timmy "buy" Gus
Age Timmy 15 years
Have Timmy eat twice
Have Timmy exercise twice*/

const p1 = new Person("Timmy", 0, 0, 0, [ ],0,0);
// console.log(p1.getName()); // Timmy

for (let i = 0; i < 5; i++) {
    p1.ageUp();
  }
console.log(`${p1.getName()} is ${p1.getAge()} years old!`); //  5

// p1.eat(5)
for (let i = 0; i < 5; i++) {
    p1.eat();
  }
  console.log(`${p1.name} gained ${p1.getWeight()}`);

// p1.exercise(5)
  for (let i = 0; i < 5; i++) {
    p1.exercise();
  }
  console.log(`${p1.name}'s gaining weight has dropped to ${p1.getWeight()}`); // Output: 0kg

// p1.ageUp(9)
for (let i = 0; i < 4; i++) {
    p1.ageUp();
  }
console.log(`${p1.name} is ${p1.getAge()} years old.`);

// Create a hamster named "Gus"
const pet1 = new Hamster(null,'Gus',15);

//Have Timmy buy "Gus" and Set Gus's owner to the string "Timmy"
p1.buyHamster(pet1)

// p1.ageUp(15)
for (let i = 0; i < 6; i++) {
    p1.ageUp();
  }
console.log(`${p1.name} is ${p1.getAge()} years old.`);

// p1.eat(2)
for (let i = 0; i < 2; i++) {
    p1.eat();
  }
  console.log(`${p1.name} gained ${p1.getWeight()}`);

// p1.exercise(2)
for (let i = 0; i < 2; i++) {
    p1.exercise();
  }
  console.log(`${p1.name}'s gaining weight has dropped to ${p1.getWeight()}`); // Output: 0kg





/* 
Chef should be a factory of Dinner
Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
Have the Chef create 3 dinners, log the dinners
 */
class Dinner {
  constructor(appetizer,entree,dessert){
   this.appetizer = appetizer;
   this.entree = entree;
   this.dessert = dessert;
  }
}

class Chef {
    constructor(name, age, experience){
        this.name = name;
        this.age = age;
        this.experience = experience;
      }
    getExperience(){
        console.log(`${this.name} has ${this.experience} years cooking experience.`)
    }

    makeNewDinner(appetizer,entree,dessert){
        return new Dinner(appetizer, entree, dessert); 
    }
}

const cook = new Chef("Peter Wang", 36, 10);
const meal1 = new Dinner("Dim sum", "Peking Roasted Duck","Egg Tarts");
const meal2 = new Dinner("Salad", "Salt and Pepper Chicken","Durian Roll");
const meal3 = new Dinner("Dim sum", "Crispy Beef"," Sweet Soup Balls");

cook.getExperience();
console.log(meal1);
console.log(meal2);
console.log(meal3);