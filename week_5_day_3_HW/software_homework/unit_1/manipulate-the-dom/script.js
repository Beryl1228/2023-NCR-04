let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
 
  // Do all of your work inside the document.addEventListener  
  
  // Part 1
var Webtitle = document.querySelector("#main-title");
Webtitle.textContent = "DOM HW";

  // Part 2
document.querySelector('body').style.backgroundColor = "#F0F8FF";

  // Part 3 
var ul = document.querySelector("#favorite-things");
ul.removeChild(ul.lastElementChild);

// Part 4
var Titles = document.querySelectorAll(".special-title");
Titles.forEach(title =>
  title.style.fontSize = "2rem");


  // Part 5
  var ulElement = document.querySelector("#past-races");
  var liElements = ulElement.getElementsByTagName("li");
  
  for (var i = 0; i < liElements.length; i++) {
    if (liElements[i].textContent === "Chicago") {
      ulElement.removeChild(liElements[i]);
      break;
    }
  }
  


  // Part 6
const node = document.createElement("li");
const textnode = document.createTextNode("Redland");
// Append the text node to the "li" node:
node.appendChild(textnode);
ulElement.appendChild(node);

  // Part 7
const parentDiv = document.querySelector(".main");
const NewDiv = document.createElement("Div");
NewDiv.classList.add("blog-post","purple");

const H1 = document.createElement("h1");
H1.textContent = "Redland";
const P1 = document.createElement("p");
P1.textContent = "I WAS DRIVING REALLY FAST IN THE TUNNEL OF REDLAND";
NewDiv.appendChild(H1);
NewDiv.appendChild(P1);
parentDiv.appendChild(NewDiv);

  // Part 8
  const quoteTitle = document.querySelector('#quote-title');
  quoteTitle.addEventListener('click', randomQuote);

  
  // Part 9
const blogpost = document.querySelector('.blog-post');

parentDiv.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("blog-post")) {
    event.target.style.color = "#98FB98";
  }
});

blogpost.addEventListener("mouseenter", (event) => {
  if (event.target.classList.contains("blog-post")) {
    event.target.style.color = "PapayaWhip";
  }
});

});
