
// quote base
    let quotebeginning =[
        {
            beginning: "Focus on",
        },

        {
            beginning: "Do not wait for",
        },

        {
            beginning: "Demonstrate",
        },

        {
            beginning: "Do not judge",
        },

        {
            beginning: "Be direct with",
        },
        {
            beginning: "Keep an eye on",
        }
    ]

    let quoteMiddle =[
        {
            middle: "your health",
        },

        {
            middle: "your ups and downs",
        },

        {
            middle: "serious trouble",
        },

        {
            middle: "your possesions",
        },

        {
            middle: "awareness",
        },

        {
            middle: "your observations",

        }
    ]

    let quoteEnding =[
        {
            ending: "and let it be your indicator",
        },

        {
            ending: "- it may bypass you",
        },

        {
            ending: "- it can pay off in peculiar ways",
        },

        {
            ending: "and it will become your habit eventually",
        },

        {
            ending: "and stand firmly by your convictions",
        },

        {
            ending: "and a dream you have will come true",

        }
    ]

// variables
const btn = document.getElementById("btn");
const quote = document.getElementById("quote");


//event listener

btn.addEventListener('click', getQuote);

function getQuote () {
    let number = Math.floor(Math.random() * quotebeginning.length);
    let qmiddle = Math.floor(Math.random() * quoteMiddle.length);
    let qending = Math.floor(Math.random() * quoteEnding.length);

    quote.innerHTML = '<span>"</span>' + quotebeginning[number].beginning + ' ' + quoteMiddle[qmiddle].middle +' ' + quoteEnding[qending].ending + '.'+'<span>"</span>';
    
}

