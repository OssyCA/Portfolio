
// Easter egg blue background
function activateBlueTheme() {
  const inputNameEgg = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const inputMessage = document.querySelector("#message");

  if (
    inputNameEgg.value === "blue" &&
    inputEmail.value === "blue" &&
    inputMessage.value === "blue"
  ) {
    const body = document.querySelector("body");
    body.style.backgroundColor = "blue";
  }
}
const submitButton = document.querySelector("#submit");

// Easter egg blue background
document.addEventListener("DOMContentLoaded", function () { // When the page is loaded
  const submitButton = document.querySelector("#submit");

  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission
      activateBlueTheme();
    });
  }
});

// Easter egg rotate
document.getElementById("easterEgg").addEventListener("click", () => {
  let section = document.querySelector("section");

  if (section.classList.contains("rotate-animation")) {
    // If the section has the class rotate-animation
    section.classList.remove("rotate-animation");
  } else {
    section.classList.add("rotate-animation");
  }
});

// Easter egg green background
document.getElementById("headerEasterEgg").addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

// Easter egg 1337
const sequence = ["1", "3", "3", "7"]; 
let inputSequence = []; 

document.addEventListener("keydown", (event) => {
  const key = event.key;

  inputSequence.push(key); // 
  if (inputSequence.join("").startsWith(sequence.join("").slice(0, inputSequence.length))) {
    if (inputSequence.length === sequence.length) {
      alert("You found the 1337 easter egg!");
      inputSequence = []; 
    }
  } else {
    inputSequence = [];
  }
});


console.log("Script loaded");