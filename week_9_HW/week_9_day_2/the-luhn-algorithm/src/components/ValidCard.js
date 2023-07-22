const validCard = (cardNumber) => {
    // Convert the incoming 16-digit number into a string and then into an array
    let cardArray = String(cardNumber).split("").map(Number);
  
    // Get the digits at even positions and multiply them by 2. If the result is greater than 9,
    // get the sum of its tens digit and ones digit.
    let evenIndexResults = cardArray.map((digit, index) => {
      if (index % 2 === 0) {
        let doubledDigit = digit * 2;
        return doubledDigit > 9 ? Math.floor(doubledDigit / 10) + (doubledDigit % 10) : doubledDigit;
      } else {
        return digit;
      }
    });
  
    // Sum all the elements in the resulting array and odd position array
    let sum = evenIndexResults.reduce((acc, curr) => acc + curr, 0);
  
    // Check if the sum is divisible by 10
    return sum % 10 === 0;
  };
  
//   console.log(validCard(1234567890123456)); // should be false
//   console.log(validCard(4408041234567893)); // should be true
//   console.log(validCard(38520000023237));   // should be true
//   console.log(validCard(4222222222222));    // should be false
  
  // The following comment explains the ternary operator:
  
  /*
  Ternary Operator
  condition ? expression1 : expression2
  */
  
  /* 
  Translated equivalent using if-else:
  
  if (doubledDigit > 9) {
    return Math.floor(doubledDigit / 10) + (doubledDigit % 10);
  } else {
    return doubledDigit;
  }
  */

  
  export default validCard;