
// Intro variables
const texts = ['Full Stack Developer', 'Computer Engineer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

window.addEventListener('DOMContentLoaded', (event) => {
    // Intro function
    (function typeIntro(){
        if(count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typing').textContent = letter;
        if(letter.length === currentText.length) {
            count++;
            index = 0;
        }
        setTimeout(typeIntro, 200);
    }());
});




// Paragraph function
const paraTexts = ['I love to solve a real world problems.'];
let paraCount = 0;
let paraIndex = 0;
let paraCurrent = '';
let paraLetter = '';

window.addEventListener('DOMContentLoaded', (event) => {  
    
    // paragragh function
    (function introPara(){
        if(paraCount === paraTexts.length) {
            paraCount = 0;
        }
        paraCurrentText = paraTexts[paraCount];
        paraLetter = paraCurrentText.slice(0, ++paraIndex);

        document.querySelector('.my_header').textContent = paraLetter;
        if(paraLetter.length === paraCurrentText.length) {
            paraCount++;
            paraIndex = 0;
        }
        setTimeout(introPara, 200);
    }());

});



