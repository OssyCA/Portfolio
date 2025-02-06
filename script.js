
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
const rotateEgg = document.getElementById("easterEgg");
if (rotateEgg) {
  rotateEgg.addEventListener("click", function () {
    const section = document.querySelector("section");

    if (section.classList.contains("rotate-animation")) {
      section.classList.remove("rotate-animation");
    } else {
      section.classList.add("rotate-animation");
    }
  });
}

const headerEasterEgg = document.getElementById("headerEasterEgg");
if (headerEasterEgg) {
  headerEasterEgg.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
  });
}

// Easter egg 1337
const sequence = ["1", "3", "3", "7"]; 
let inputSequence = []; 

document.addEventListener("keydown", (event) => { // When a key is pressed
  const key = event.key;

  inputSequence.push(key); 
  if (inputSequence.join("").startsWith(sequence.join("").slice(0, inputSequence.length))) {
    if (inputSequence.length === sequence.length) {
      alert("You found the easter egg!");
      inputSequence = []; 
    }
  } else {
    inputSequence = [];
  }
});

const discBtn = document.getElementById("discBtn");

if (discBtn) {
  discBtn.addEventListener("click", () => {
    window.location.href = "about.html"
  });
}




console.log("Script loaded"); // remove this line once you have confirmed that the script is linked