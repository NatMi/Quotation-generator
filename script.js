

// quotation object end

// quote base
    let quoteBeginning =[ "Focus on", "Do not wait for", "Demonstrate", "Do not judge", "Be confident with", "Keep an eye on"]

    let quoteMiddle =[ "your health", "the unbearable lightness of dawn sleeping bag", "serious trouble", "your possesion", "awareness", "your observation"]

    let quoteEnding =[ "and let it be your indicator", "- it may bypass you", "- it can pay off in peculiar ways", "and it will become your habit eventually", "and stand firmly by your convictions","and a dream you have will come true"]


// variables
const btn = document.getElementById("btn");
const quote = document.getElementById("quote");


//event listener

btn.addEventListener('click', getQuote);

function getQuote () {
    let number = Math.floor(Math.random() * quoteBeginning.length);
    let qmiddle = Math.floor(Math.random() * quoteMiddle.length);
    let qending = Math.floor(Math.random() * quoteEnding.length);

    quote.innerHTML = '<span>"</span>' + quoteBeginning[number] + ' ' + quoteMiddle[qmiddle] +' ' + quoteEnding[qending] + '.'+'<span>"</span>';
    
}

let x = 5;
x = true;