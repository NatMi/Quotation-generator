


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


 /* // randomNumber function
 
 function createRandomNumber(quotePartArray) {
    let randomNumber = (Math.floor(Math.random() * quotePartArray.length));
    return randomNumber;
} */


// constants and variables from document
const btnFortune = document.getElementById("btnFortune");
const btnMisfortune = document.getElementById("btnMisfortune");
const quote = document.getElementById("quote");
const chosenNumberOfQuotes = document.getElementById("chosenNumberOfQuotes").value;
const ul = document.getElementById('.quoteList');



//event listeners
btnFortune.addEventListener('click', generateQuotes );
btnMisfortune.addEventListener('click', createMisfortuneCookie);


// functions

function comingSoonFunction(){
    quote.innerHTML = "Coming soon... *sound of thunder roll* "
}

function createFortuneCookie () {
    return ` "${ quoteBeginning.generateRandomQuotePart()} ${quoteMiddle.generateRandomQuotePart()} ${quoteEnding.generateRandomQuotePart()}." `;

}

function createMisfortuneCookie(){
    quote.innerHTML = '<span>"</span>' + quoteBeginning.generateRandomQuotePart() + ' ' + quoteMiddle.generateRandomQuotePart() +' ' + misfortuneCookieEnding.generateRandomQuotePart() + '.'+'<span>"</span>';
}


function generateQuotes(){
for ( let i = 0; i < 5; i++) {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(`quote number = ${[i]} : ${createFortuneCookie()} `));
  quoteList.appendChild(li);

  }
}

