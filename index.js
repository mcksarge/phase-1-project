
document.addEventListener('DOMContentLoaded', () => {
    fetchQuotes()
    loadCharacters()
})



// ************Fetch Requests*************
const headers = {
    'Content-type': 'application/json',
    'Authorization': 'Bearer f8kSnc-WDH9mfUgYchBa'
}


let characters;
async function loadCharacters(){
    fetch('https://the-one-api.dev/v2/character', {headers})
    .then(res => res.json())
    .then(data => {
        characters = data.docs;
    })
}


let quotes;
async function fetchQuotes(){
    fetch('https://the-one-api.dev/v2/quote', {headers})
    .then(res => res.json())
    .then(data => {
        quotes = data.docs;
    })
}




//*********Quotes***********
function displayQuote(quotes, characters){
    let quoteTitle = document.getElementById('quote-title');
    let quoteContainer = document.getElementById('quote-container') 
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    let randomQuoteCharacter = randomQuote.character;

    quoteTitle.innerHTML = `
        <h4><em>"${randomQuote.dialog}"</em></h4>

    `

    for (let i = 0; i < characters.length; i++){

        if (randomQuoteCharacter === characters[i]._id){
            quoteContainer.innerHTML = `
                <p>-${characters[i].name}</p>
                <button class="like">Like! <span class="like-glyph">&#x2661;</span></button>
            `
        }
    }



 //*******Like Button *********
    let heartButton = document.querySelector("#quote-container > button");
    let heart = document.querySelector("#quote-container > button > span")
    const emptyHeart = '\u2665';
    const fullHeart = '\u2661';

    heart.textContent = fullHeart;
    heartButton.addEventListener('click', (e) => {
    
        

        if (heart.textContent === fullHeart){
            heart.textContent = emptyHeart;
        } else if (heart.textContent === emptyHeart){
            heart.textContent = fullHeart;
        }
    })

  
}



//***********Book Summaries******************
const book1 = document.getElementById('book-1');
const book2 = document.getElementById('book-2');
const book3 = document.getElementById('book-3');
let book1Summary = document.querySelector('#book-1-summary');
let book2Summary = document.querySelector('#book-2-summary');
let book3Summary = document.querySelector('#book-3-summary');

//Fellowship of the Ring
function book1Display (){
    book2Summary.style.display = "none";
    book3Summary.style.display = "none";
    book2.style.border = "none";
    book2.style.height = "400px";
    book2.style.width = "300px";
    book3.style.border = "none";
    book3.style.height = "400px";
    book3.style.width = "300px";


    if (book1Summary.style.display === "block"){
        book1Summary.style.display = "none";
        book1.style.border = "none";
        book1.style.height = "400px";
        book1.style.width = "300px";
    } else {
        book1Summary.style.display = "block";
        book1.style.border = "3px solid yellow";
        book1.style.height = "394px";
        book1.style.width = "294px";
    }
}

//The Two Towers
function book2Display (){
    book1Summary.style.display = "none";
    book3Summary.style.display = "none";
    book1.style.border = "none";
    book1.style.height = "400px";
    book1.style.width = "300px";
    book3.style.border = "none";
    book3.style.height = "400px";
    book3.style.width = "300px";


    if (book2Summary.style.display === "block"){
        book2Summary.style.display = "none";
        book2.style.border = "none";
        book2.style.height = "400px";
        book2.style.width = "300px";
    } else {
        book2Summary.style.display = "block";
        book2.style.border = "3px solid yellow";
        book2.style.height = "394px";
        book2.style.width = "294px";
    }
}

//Return of the King
function book3Display (){
    book1Summary.style.display = "none";
    book2Summary.style.display = "none";
    book1.style.border = "none";
    book1.style.height = "400px";
    book1.style.width = "300px";
    book2.style.border = "none";
    book2.style.height = "400px";
    book2.style.width = "300px";


    if (book3Summary.style.display === "block"){
        book3Summary.style.display = "none";
        book3.style.border = "none";
        book3.style.height = "400px";
        book3.style.width = "300px";
    } else {
        book3Summary.style.display = "block";
        book3.style.border = "3px solid yellow";
        book3.style.height = "394px";
        book3.style.width = "294px";
    }
}


//**********Slideshow setup************
let slideIndex = 1;
showSlides(slideIndex);

//Next/Previous
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail controls, script is called in HTML with onClick
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//For this function, slideIndex is being passed as the argument
function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dots');
    
    if (n > slides.length) {slideIndex = 1} //Goes to slide 1 if user goes past last slide
    if (n < 1) {slideIndex = slides.length} //Goes to last slide if user goes before first slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; //Iterates through slides
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', ''); //Iterates through dots
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1] += ' active';

}

//**********End of Slideshow*******************





//*********Event Listeners*************

const quoteButton = document.getElementById('quote-button').addEventListener('click', (e) => {
    displayQuote(quotes, characters)
})


book1.addEventListener('click', (e) => {
    book1Display()
})

book2.addEventListener('click', (e) => {
    book2Display()
})

book3.addEventListener('click', (e) => {
    book3Display()
})

