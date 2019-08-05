// quote base
class quoteBase {
    constructor (quotePart){
        this.quotePart = quotePart;
    }
    };

let quoteBeginning = new quoteBase (
    [ "Focus on", "Do not wait for", "Demonstrate", "Do not judge", "Be confident with", "Keep an eye on"]
 );

 let quoteMiddle = new quoteBase (
    [ "your health", "opportunities", "serious trouble", "your possesion", "awareness", "your observation"]
 );

 let quoteEnding = new quoteBase (
    [ "and let it be your indicator", "- it may bypass you", "- it can pay off in peculiar ways", "and it will become your habit eventually", "and stand firmly by your convictions","and a dream you have will come true"]
 );

 let misfortuneEnding = new quoteBase (
    [ "and let it be your gruesome burden", "- it may doom you", "- it can pay off in dreadful ways", "as it will become your downfall eventually", "and you will stay weak with your disgrace","and a nightmare you have will come true"]
 );

// DOM
const quote = document.getElementById("quote");
let chosenNumberOfQuotes = document.getElementById("chosenNumberOfQuotes");

// click event delegation  // TODO: grab by id instead of class?
const parent = document.querySelector("body");

parent.addEventListener('click', event => {
	if (event.target.className === 'btnFortune') {
        generateQuotes(quoteBeginning, quoteMiddle, quoteEnding);
    }

    if (event.target.className === 'btnMisfortune') {
        generateQuotes(quoteBeginning, quoteMiddle, misfortuneEnding);
    }

    if (event.target.className === 'btnClearAll') {
        clearAll();
    }
 });

// function clears all quotes that were generated as list elements
function clearAll() { 
    let ul = document.querySelector("ul"); 
    
    let child = ul.lastElementChild;  
    while (child) { 
        ul.removeChild(child); 
        child = ul.lastElementChild; 
    } 
} 

 // randomQuotePart function
 function randomQuotePart(quotePartArray) {
    let randomNumber = (Math.floor(Math.random() * quotePartArray.quotePart.length));
    return quotePartArray.quotePart[randomNumber];
 };

// generate quote type & loop  // TODO: quote type parameter?
function generateQuotes(cookieBeginning, cookieMiddle, cookieEnding){
    clearAll();
for ( let i = 0; i < chosenNumberOfQuotes.value; i++) {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(` "${randomQuotePart(cookieBeginning)} ${randomQuotePart(cookieMiddle)} ${randomQuotePart(cookieEnding)}." `));
  quoteList.appendChild(li);
  }
}

// function to be used for features that are being worked on
function comingSoonFunction(){
    quote.innerHTML = "Coming soon... *sound of thunder roll* "
}