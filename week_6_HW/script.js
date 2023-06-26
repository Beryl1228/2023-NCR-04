/* 
A game round would look like this:
You attack the first alien ship
If the ship survives, it attacks you
If you survive, you attack the ship again
If it survives, it attacks you again ... etc
If you destroy the ship, you have the option to attack the next ship or to retreat
If you retreat, the game is over, perhaps leaving the game open for further developments or options
You win the game if you destroy all of the aliens
You lose the game if you are destroyed



Ship Properties
hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
firepower is the amount of damage done to the hull of the target with a successful hit
accuracy is the chance between 0 and 1 that the ship will hit its target
Your spaceship, the USS Assembly should have the following properties:

hull - 20
firepower - 5
accuracy - .7
The alien ships should each have the following ranged properties determined randomly:

hull - between 3and 6
firepower - between 2and 4
accuracy - between .6and .8
You could be battling six alien ships each with unique values.

Example use of accuracy to determine a hit:

if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
}
*/

/* 
pseudo code 
create space ships class. give the ship it's property.
create players,create alien, using factory pattern create classes to avoid repeating.
connect the player and alien with a if statement, get a winner. (by starting attacks. maybe through mouse clicking.)
give the player retreat so the player can start the game again
(reset it's life level, ect)
*/

document.addEventListener("DOMContentLoaded", function(event) {
  // Define the base class for a ship
  class Ship {
    constructor(name, hull, firepower, accuracy, isAlive) {
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
      this.isAlive = true;
    }
  }

  // Define the player ship class, Make the Human Ship sub-class.
  class HumanShip extends Ship {
    constructor(name, hull, firepower, accuracy, isAlive) {
      super(name, hull, firepower, accuracy, isAlive);
    }

    // Make a method for the USS Assembly that will attack a given target. The target can be an input to the method.
    attack(targetShip) {
       let randomNum = Math.random();
      // Make it so the alien will only be hit if a Math.random call is below the accuracy threshold
      if (randomNum <= 0.7) {
        console.log("Great! You hit the alienship");
        // Make it so the method reduces the target's hull by the firepower of the USS Assembly.
        targetShip.hull -= this.firepower;
      } else {
        console.log("You missed the alien ship!")
      } 
    }
  }

  // Define the alien ship class,Make an Alien Ship sub-class.
  class AlienShip extends Ship {
    constructor() {
      const hull = Math.floor(Math.random() * 4) + 3; // Random number between 3 and 6
      const firepower = Math.floor(Math.random() * 3) + 2; // Random number between 2 and 4
      const accuracy = (Math.floor(Math.random() * 3) + 6) / 10; // Random number between 0.6 and 0.8
      super("Alien Ship", hull, firepower, accuracy);
      this.isAlive = true; // Set isAlive to true for alien ships
  }

    // Run the method and pass it the alien ship.
    attack(targetShip) {
      let randomNum = Math.random();
      // Make a method for the alien ship to attack a target
      if (randomNum  <= this.accuracy) {
        console.log(`You've been Hit! - ${this.firepower} damage to your hull`);
        targetShip.hull -= this.firepower;
        console.log(`Your current hull is ${targetShip.hull}`)
      } else {
        console.log("You've missed the attack from the aliens!")
      }
    }
  }

  // Create instances of each class
  const playerShip = new HumanShip("USS Assembly", 20, 5, 0.7);
  console.log(playerShip); 
 /* 
  Make a loop that calls the Class and generates alien ships.
  Push those constructed objects into a predefined array.
  Start with 6 ships (the loop should run 6 times).
*/
  const alienShips = [];
  // Method to create alien ships with factory pattern
  function createAlienShips() {
    for (let i = 0; i < 6; i++) {
        const alienShip = new AlienShip();
        alienShips.push(alienShip);
      }
    }
  createAlienShips();
  console.log(alienShips);


  // Make a game object
  const game = {
    playerShip: playerShip,
    alienShips: alienShips,
    isGameOver: false,
    currentShipIndex: 0,

    
    /* 
      Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly.
      If the hull is 0 or less, display a message that the ship went kabloo-ey.
    */
      checkWin(targetShip) {
        if (targetShip.hull <= 0) {
            console.log(`${targetShip.name} went kabloo-ey!`);
        }
    },

    // Method for player ship to attack the alien ships
    attackAlienShip() {
      while (this.alienShips.length > 0 && playerShip.hull > 0) {
        const targetShip = this.alienShips[0];
        playerShip.attack(targetShip);
    
        if (targetShip.hull <= 0) {
          console.log(`You destroyed one alien ship!`);
          this.alienShips.shift(); // Remove the defeated alien ship from the array
        } else {
          break; // Break the loop if the player ship is still alive and the target ship is not destroyed
        }
      }
    
      this.checkWin(playerShip); // Check win condition after each attack
    
      if (this.alienShips.length === 0 && playerShip.hull > 0) {
        console.log("You destroyed the last alien ship! Congratulations, you win!");
        gameResult.textContent = 'You Won! You save the Universe!!!'
      }
    },
    
    attackPlayerShip() {
      if (this.alienShips.length > 0 && playerShip.hull > 0) {
        const currentShip = this.alienShips.shift();
        currentShip.attack(playerShip);
    
        if (playerShip.hull <= 0) {
          console.log("Your ship was destroyed! Game over. Press restart if you wish to play again");
        } else {
          gamePrompt.textContent = "Continue the battle by clicking the Resume button or click retreat to take a break";
        }
      }
    }
    

  }

var gameResult = document.querySelector('h3');

let gamePrompt = document.querySelector('h2');
gamePrompt.textContent = "Hello Space Captain! Your mission is to destroy all Alien Spaceships. Press the Play Button to start!"

// Add click event listener to the buttons
const playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', playGame);

const retreatBtn = document.getElementById('retreatBtn');
retreatBtn.addEventListener('click', retreatGame);

const resumeBtn = document.getElementById('resumeBtn');
resumeBtn.addEventListener('click', resumeGame);

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetGame);

// Function to start the game when the play button is clicked
function playGame() {
    game.attackAlienShip();
    game.attackPlayerShip();
    game.checkWin(playerShip);
    playBtn.disabled = true; // Disable the play button once the game starts
    retreatBtn.disabled = false;
    resumeBtn.disabled = false;
    resetBtn.disabled = false;
}

// Function to retreat from the game when the retreat button is clicked
function retreatGame() {
    console.log("You have retreated from the game, the game is over");
    // Add the appropriate logic here, such as resetting the game or displaying a message. 
    game.isGameOver = true;
    resumeBtn.disabled = true; 
    restartBtn.disabled = false;// Enable the play button for a new game
}

// Function to resume the game when the resume button is clicked
function resumeGame() {
    console.log("Resuming the game...");
    playGame();
    // Add the appropriate logic here to resume the game from where it was left off.
}


// Function to reset the game when the reset button is clicked
function resetGame() {
  console.log("Resetting the game...");
  // Reset the game state and player ship's hull
  game.isGameOver = false;
  game.currentShipIndex = 0;
  playerShip.hull = 20;

  // Clear the alien ships array and create new alien ships
  alienShips.length = 0;
  createAlienShips();

  // Enable necessary buttons and start the game
  playBtn.disabled = false;
  retreatBtn.disabled = true;
  resumeBtn.disabled = true;
  resetBtn.disabled = true;

  gamePrompt.textContent = "Game has been reset. Press the Play Button to start!";
  gameResult.textContent = "";

  console.log(playerShip);
  console.log(alienShips);
}
});




