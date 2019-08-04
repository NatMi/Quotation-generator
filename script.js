


// quote base

class quoteBase {
    constructor (quotePart){
        this.quotePart = quotePart;
    }

    generateRandomQuotePart() {
     let randomSentencePart = this.quotePart[Math.floor(Math.random() * this.quotePart.length)];
      return randomSentencePart;
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

 let misfortuneCookieEnding = new quoteBase (
    [ "and let it be your gruesome burden", "- it may doom you", "- it can pay off in dreadful ways", "as it will become your downfall eventually", "and you will stay weak with your disgrace","and a nightmare you have will come true"]
 );

// constants and variables from document
const btnFortune = document.getElementById("btnFortune");
const btnMisfortune = document.getElementById("btnMisfortune");
const quote = document.getElementById("quote");
let chosenNumberOfQuotes = document.getElementById("chosenNumberOfQuotes");


//event listeners
btnFortune.addEventListener('click', generateFortuneQuotes );  // generateQuote(fortuneCookie)
btnMisfortune.addEventListener('click', generateMisfortuneQuotes); // // generateQuote(misfortuneCookie)
btnClearAll.addEventListener('click', clearAll);


// function clears all quotes that were generated as list elements
function clearAll() { 
    let ul = document.querySelector("ul"); 

    
    let child = ul.lastElementChild;  
    while (child) { 
        ul.removeChild(child); 
        child = ul.lastElementChild; 
    } 
} 
// function to be used for features that are being worked on
function comingSoonFunction(){
    quote.innerHTML = "Coming soon... *sound of thunder roll* "
}

 // randomNumber function
 
 function createRandomNumber(quotePartArray) {
    let randomNumber = (Math.floor(Math.random() * quotePartArray.quotePart.length));
    return quotePartArray.quotePart[randomNumber];
 };


 // fortune cookie quote generators
function createFortuneCookie () {
    return ` "${createRandomNumber(quoteBeginning)} ${createRandomNumber(quoteMiddle)} ${createRandomNumber(quoteEnding)}." `;

}

function createMisfortuneCookie(){
    return ` "${createRandomNumber(quoteBeginning)} ${createRandomNumber(quoteMiddle)} ${createRandomNumber(misfortuneCookieEnding)}." `;
}





// quote generator loop - TODO - blank function, cookie type to be determined other way

function generateFortuneQuotes(){
    clearAll();
for ( let i = 0; i < chosenNumberOfQuotes.value; i++) {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(`quote index = ${[i]} : ${createFortuneCookie()} `));
  quoteList.appendChild(li);

  }
}


function generateMisfortuneQuotes(){
    clearAll();
    for ( let i = 0; i < chosenNumberOfQuotes.value; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`quote index = ${[i]} : ${createMisfortuneCookie()} `));
    quoteList.appendChild(li);

    }
}

