/* 
Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.

minusOne(10);        // 9
minusOne(100);       // 99
minusOne(Infinity);  // Infinity
Write a function makeSentence that takes three parameters and concatenates them into a fully formed sentence.

makeSentence('I', 'want', 'chimichangas');
=> 'Oh boy, do I want chimichangas or what?'

Write a function called getLastElement that takes a parameter arr.
Invoke the function with an array as the argument.
The function should print the last element within the array.

getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]
Hint: arr[arr.length - 1]--> 
*/

let num = 0;
function minusOne(num){   
    num = num - 1;
    return num;
} 
console.log(minusOne(10));
console.log(minusOne(100));
console.log(minusOne(Infinity));

function makeSentence(...params) {
    return params.join(' ');
  }
  
console.log(makeSentence('I', 'want', 'chimichangas'));


function getLastElement(arr){
    let result = "";
   for(let i = 0; i< arr.length; i++){
    result = arr[arr.length-1];
   }
   return result;
}

console.log(getLastElement([1, 2, 3, 4, 5, 6]));
console.log(getLastElement(['a', 'b', 'c']));
console.log(getLastElement([[1, 2, 3], [4, 5, 6]]));

  
