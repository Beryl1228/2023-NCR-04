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
 const ANGLE = {
  1: {
    x: 45,
    y: 0,
    z: 65
  },

  2: {
    x: 135,
    y: 45,
    z: 0
   },

  3: {
    x: 135,
    y: 115,
    z: 90
   },

  4: {
    x: 45,
    y: 180,
    z: 65
   },

  5: {
    x: -65,
    y: 45,
    z: 0
  },

  6: {
    x: -65,
    y: 45,
    z: 90
  }
};

    
    //make dices's num as a array
    let dices = Array.prototype.slice.call(document.querySelectorAll('.cubic')); 
    let speed = 3000;
    
    let angleGenerator = () => {
      let factor = Math.floor(Math.random() * 6 + 1 ); //(test the angle in browser) to get numbers from 1 - 6
      let { x, y, z } = ANGLE[factor];
      return {
        x: x + 3600,
        y: y + 3600,
        z: z + 3600,
        num: factor // get the dice number
      };
        
    };
    
    
    //play's turn to play
    let playerPlay = () => {
      let nums = [ ]; // put the dice's number in an array
        
      dices.forEach(dice => {
        let { x, y, z, num } = angleGenerator();
    
        setTimeout(() => {
          // request render
          dice.style.cssText = `
                    -webkit-transition-duration: ${speed}ms;
                            transition-duration: ${speed}ms;
                    -webkit-transform: rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg);
                            transform: rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg);
                `;
          nums.push(num); // push the num into the nums array
          if (nums.length === dices.length) {
              // 所有骰子都投掷完成(after all the dice was done rotation)
              let sum = nums.reduce((acc, curr) => acc + curr, 0); // 数字相加求和
              console.log(`You Got ${sum} !!`);
            }
        }, 10);
      });
        //  console.log(nums);
    };
    
    

  const playBtn = document.getElementById('playBtn');
  playBtn.addEventListener('click', playGame);

  let gamePrompt = document.querySelector('h2');



  //computer's turn to play
  var computer;
  function pcPlay() {
    computer = setTimeout(pcScore, 2000);
}

function pcScore() {

  gamePrompt.textContent = `Computer got ${pcSum} !!!`
};

//check win condition
function checkWin(){
  if (sum != 12 && pcSum == 12) {
    window.alert(`You lost! computer Win!`);
  } else if (sum == 12 && pcSum != 12) {
    window.alert(`You Win! computer lost!`);
  } else if (sum != 12 && pcSum != 12) {
    window.alert("One more round to detemine the winner!" )
  }
}

// Function to start the game when the play button is clicked
function playGame() {
  playerPlay();
  // playBtn.disabled = true; // Disable the play button once the game starts
  pcPlay();
  checkWin();
  // nextBtn.disabled = false;
} 




  //   const 
  //   document.querySelector('#speed').addEventListener('change', ({ target }) => {
  //     speed = (parseFloat(target.value) || 1) * 1000;
  //     target.value = speed / 1000;
  //   });





  /* let dice1 = document.querySelector('#cube1'); //parentDiv
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
  
  



  // const nextBtn = document.getElementById('nextBtn');
  // nextBtn.addEventListener('click', nextGame);
  
  




const cube = document.querySelectorAll('.cubic');

function rotateCube() {
  cube.style.transform = 'rotateY(180deg)';
}

rotateCube();




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


 */