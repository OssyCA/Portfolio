// Easter egg
const inputNameEgg = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const submitButton = document.querySelector('#submit');

function easterEgg_1() {
    if (inputNameEgg.value === "green" && inputEmail.value === "green" && inputMessage.value === "green") {
        const body = document.querySelector('body');
        body.style.backgroundColor = 'green';
    }
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    easterEgg_1();
});

document.getElementById("easterEgg").addEventListener("click", function() {
    let section = document.querySelector("section");

    
    if (section.classList.contains("rotate-animation")) { // If the section has the class rotate-animation
        section.classList.remove("rotate-animation"); 
    } else {
        section.classList.add("rotate-animation");
    }
});