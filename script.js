


// quote base

class quoteBase {
    constructor (quotePart){
        this.quotePart = quotePart;
    }

    generateRandomQuotePart() {
     let randomSentencePart = this.quotePart[Math.floor(Math.random()*this.quotePart.length)];
      return randomSentencePart;
    }
};


let quoteBeginning = new quoteBase (
    [ "Focus on", "Do not wait for", "Demonstrate", "Do not judge", "Be confident with", "Keep an eye on"]
 );

 let quoteMiddle = new quoteBase (
    [ "your health", "the unbearable lightness of a dawn sleeping bag", "serious trouble", "your possesion", "awareness", "your observation"]
 );

 let quoteEnding = new quoteBase (
    [ "and let it be your indicator", "- it may bypass you", "- it can pay off in peculiar ways", "and it will become your habit eventually", "and stand firmly by your convictions","and a dream you have will come true"]
 );


// constants
const btn = document.getElementById("btn");
const quote = document.getElementById("quote");




//event listener
btn.addEventListener('click', createNewQuotation);


function createNewQuotation () {

    quote.innerHTML = '<span>"</span>' + quoteBeginning.generateRandomQuotePart() + ' ' + quoteMiddle.generateRandomQuotePart() +' ' + quoteEnding.generateRandomQuotePart() + '.'+'<span>"</span>';
    
}

