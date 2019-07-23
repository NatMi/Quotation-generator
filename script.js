


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
const btnFortune = document.getElementById("btnFortune");
const btnMisfortune = document.getElementById("btnMisfortune");
const quote = document.getElementById("quote");




//event listener
btnFortune.addEventListener('click', createNewQuotation);
btnMisfortune.addEventListener('click', comingSoonFunction);



function comingSoonFunction(){
    quote.innerHTML = "Coming soon... *sound of thunder roll* "
}
function createNewQuotation () {
    quote.innerHTML = '<span>"</span>' + quoteBeginning.generateRandomQuotePart() + ' ' + quoteMiddle.generateRandomQuotePart() +' ' + quoteEnding.generateRandomQuotePart() + '.'+'<span>"</span>';
}


function temporaryFunction(arg, arg2, arg3){
    let ret = arg + arg2 + arg3;
    return ret;
}
console.log (temporaryFunction(3,4,6));
console.log (temporaryFunction('gdfd ','fdrdd ','tdrd'));
