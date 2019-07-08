
// quote base
    let quotes =[
        {
            quote: 'Quote1',
            author: 'Author One'
        },

        {
            quote: 'Quote2',
            author: 'Author Two'
        },

        {
            quote: 'Quote3',
            author: 'Author Three'
        },

        {
            quote: 'Quote4',
            author: 'Author Four'
        },

        {
            quote: 'Quote5',
            author: 'Author Five'
        },

        {
            quote: 'Quote6',
            author: 'Author Six'
        },

        {
            quote: 'Quote7',
            author: 'Author Seven'
        },

    ]

// variables
const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");


//event listener

btn.addEventListener('click', getQuote);

function getQuote () {
    let number = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
    author.innerHTML = quotes[number].author;
    
}

