
// quote base
    let quotebeginning =[
        {
            beginning: 'Beginning_1',
        },

        {
            beginning: 'Beginning_2',
        },

        {
            beginning: 'Beginning_3',
        },

        {
            beginning: 'Beginning_4',
        },

        {
            beginning: 'Beginning_5',
        },

        {
            beginning: 'Beginning_6',
        }
    ]

    let quoteMiddle =[
        {
            middle: 'Middle_1',
        },

        {
            middle: 'Middle_2',
        },

        {
            middle: 'Middle_3',
        },

        {
            middle: 'Middle_4',
        },

        {
            middle: 'Middle_5',
        },

        {
            middle: 'Middle_6',

        }
    ]

    let quoteEnding =[
        {
            ending: 'Ending_1',
        },

        {
            ending: 'Ending_2',
        },

        {
            ending: 'Ending_3',
        },

        {
            ending: 'Ending_4',
        },

        {
            ending: 'Ending_5',
        },

        {
            ending: 'Ending_6',

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

