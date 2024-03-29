// quote base
class quoteBase {
    constructor (quotePart){
        this.quotePart = quotePart;
    }
    };

let quoteBeginning = new quoteBase (
    [ "Focus on", "Put trust in", "Learn from", "Honor", "Embrace", "Keep your eyes on", "Praise", "Celebrate"]
 );

let quoteMiddle = new quoteBase (
    [ "your abilities", "opportunities", "present moment", "whatever makes you happy", "possibilities of improvement", "your passion", "the goal", "people who are going to lift you higher",]
 );

let quoteEnding = new quoteBase (
    [ "and let it be your indicator", "- interesting proposition will come your way", "- it can pay off in most satisfying ways", "and it will become your habit eventually", "- good things will happen","and a dream you have will come true", "- you are heading in the right direction"]
 );

let misfortuneEnding = new quoteBase (
    [ "and let it be your gruesome burden", "- it may doom you", "- it can pay off in dreadful ways", "as it will become your downfall eventually","while you can", "and you will stay weak with your disgrace","and a nightmare you have will come true", "before you realise this ship is sinking fast"]
 );

// DOM
const quote = document.getElementById("quote");
let btnClearAll = document.getElementById("btnClearAll")
let chosenNumberOfQuotes = document.getElementById("chosenNumberOfQuotes");
let ul = document.querySelector("ul"); 
let miniCookieImg = document.getElementById("minicookie")

// click event delegation 
const parent = document.querySelector("body");

parent.addEventListener('click', event => {
	if (event.target.id === 'btnFortune') {
        generateQuotes(quoteBeginning, quoteMiddle, quoteEnding);
    }

    else if (event.target.id === 'btnMisfortune') {
        generateQuotes(quoteBeginning, quoteMiddle, misfortuneEnding);
    }

    else if (event.target.id === 'btnClearAll') {
        clearAll();
    }
 });

// function clears all quotes that were generated as list elements
function clearAll() { 
    
    let child = ul.lastElementChild;  
    while (child) { 
        ul.removeChild(child); 
        child = ul.lastElementChild; 
        btnClearAll.style.display = "none"; // hides "Clear all" button that is generated along with the random quote list
        miniCookieImg.style.display ="none"
    } 
} 

 // randomQuotePart function - choses random element from quote part array
 function randomQuotePart(quotePartArray) {
    let randomNumber = (Math.floor(Math.random() * quotePartArray.quotePart.length));
    return quotePartArray.quotePart[randomNumber];
 };

// generate quote type & loop 
function generateQuotes(cookieBeginning, cookieMiddle, cookieEnding){
    clearAll();

for ( let i = 0; i < chosenNumberOfQuotes.value; i++) {
  let li = document.createElement('li');

  li.appendChild(document.createTextNode(` ${[i+1]}. "${randomQuotePart(cookieBeginning)} ${randomQuotePart(cookieMiddle)} ${randomQuotePart(cookieEnding)}." `));
  
  ul.appendChild(li);

  btnClearAll.style.display = "inline-block";
  miniCookieImg.style.display ="inline-block"
  }
}

// function to be used for features that are being worked on
function comingSoonFunction(){
    quote.innerHTML = "Coming soon... *sound of thunder roll* "
}