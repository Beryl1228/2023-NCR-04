/* 
Game Setup:

Each player takes turns rolling three dice.
The computer serves as the opponent and also rolls three dice.
Gameplay:

Both the player and the computer roll their dice and calculate the total sum of the numbers rolled.
If the player or the computer reaches a total of 12 points with their dice won,
If both the player and the computer reach 12 points in the same round, it results in a tie,
The game continues until one player reaches a score of 3 points.
Winning Condition:

If the player reaches 12 points, they win the game.
If the computer reaches 12 points,, the player loses the game.
If both the player and the computer both have 12 points at the same time, an additional round is played until a winner is determined.

*/

document.addEventListener("DOMContentLoaded", function(event) {
  
  let dice1 = document.querySelector('#cube1'); //parentDiv
  let dice2 = document.querySelector('#cube2');
  let dice3 = document.querySelector('#cube3');



  let dice1Child = dice1.querySelectorAll('div');
  let dice2Child = dice2.querySelectorAll('div');
  let dice3Child = dice3.querySelectorAll('div');



  function getRandomNum(){
  var dice1numArray = [ ];
  for(let i = 0 ; i< dice1Child.length ; i++){
    var dice1num = dice1Child[i].getAttribute('num')
    dice1numArray.push(dice1num);
    // console.log(dice1num)
  }
  // console.log(dice1numArray) // get an array contains 1-6 
  var randomNum = dice1numArray[Math.floor(Math.random() * dice1Child.length)]; //get random number from divs(contains num 1-6)
  return randomNum;
  }
  // console.log(getRandomNum(dice1Child));
  // console.log(getRandomNum(dice2Child));
  // console.log(getRandomNum(dice3Child));

  
  let dice1Num = Number(getRandomNum(dice1Child));
  let dice2Num = Number(getRandomNum(dice2Child));
  let dice3Num = Number(getRandomNum(dice3Child));
 
  let sum = dice1Num+dice2Num+dice3Num;
  // console.log(sum); //testing sum 

  let pcSum = Math.floor(Math.random() * 16) + 3;
  
  

  const playBtn = document.getElementById('playBtn');
  playBtn.addEventListener('click', playGame);

  // const nextBtn = document.getElementById('nextBtn');
  // nextBtn.addEventListener('click', nextGame);
  
  let gamePrompt = document.querySelector('h2');

  
  //computer's turn to play
  var computer;
  function pcPlay() {
    computer = setTimeout(pcScore, 2000);
}

function pcScore() {
  gamePrompt.textContent = `Computer got ${pcSum} !!!`
};

function checkWin(){
  if (sum != 12 && pcSum == 12) {
    window.alert(`You lost! computer Win!`);
  } else if (sum == 12 && pcSum != 12) {
    window.alert(`You Win! computer lost!`);
  } else if (sum != 12 && pcSum != 12) {
    window.alert("One more round to detemine the winner!" )
  }
}

function playerPlay(){
  gamePrompt.textContent = `You got ${sum} !!!`
}


const cube = document.querySelectorAll('.cubic');

function rotateCube() {
  cube.style.transform = 'rotateY(180deg)';
}

rotateCube();

// Function to start the game when the play button is clicked
function playGame() {
  playerPlay();
  // playBtn.disabled = true; // Disable the play button once the game starts
  pcPlay();
  checkWin();
  // nextBtn.disabled = false;
}


// gamePrompt.textContent = "One more round to detemine the winner!"

function reloadPage(){
  var reload = setTimeout(isGameOver, 3000); 
}

  function isGameOver(){
    window.location.reload(true);
  }


  // function resetGame() {
  //   playBtn.disabled = false;
  //   sum = 0;
  //   pcSum = 0;
  //   gamePrompt.textContent = "One more round to detemine the winner!";
  // }

function nextGame() { 
  gamePrompt.textContent = "One more round to detemine the winner!";
  playerPlay();
  pcPlay();
  checkWin();
  reloadPage();
 }
});

