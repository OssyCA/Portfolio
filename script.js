
// Easter eggs variables
const rotateEgg = document.getElementById("easterEgg");
const headerEasterEgg = document.getElementById("headerEasterEgg");

// Form variable
const form = document.getElementById('contactForm');

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


// Easter egg rotate
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

if (headerEasterEgg) {
  headerEasterEgg.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
  });
}

function setupNavigation(buttonId, targetPage) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", () => {
      window.location.href = targetPage;
    });
  }
}

setupNavigation("discBtn", "about.html");
setupNavigation("contactBtn", "contact.html");


if(form) {
  form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});
}

document.addEventListener("DOMContentLoaded", () => { 
   // remove this line once you have confirmed that the script is linked
  // Hämta den nuvarande URL-sökvägen
  let path = window.location.pathname;
  // Normalisera för GitHub Pages (t.ex. "/Portfolio/" ska fungera som "/")
  if (path === "/" || path.endsWith("index.html") || path === "/Portfolio/") {

      function createSnowflake() {
          const snowflake = document.createElement("div");
          snowflake.innerHTML = "❄";
          snowflake.classList.add("snowflake");
          document.body.appendChild(snowflake);

          let screenWidth = window.innerWidth;
          let maxWidth = screenWidth * 0.95;

          let size = screenWidth < 768 ? Math.random() * 10 + 5 + "px" : Math.random() * 15 + 10 + "px";
          let duration = screenWidth < 768 ? Math.random() * 3 + 2 : Math.random() * 5 + 3; 

          snowflake.style.left = Math.random() * maxWidth + "px";
          snowflake.style.fontSize = size;
          snowflake.style.opacity = Math.random() * 0.8 + 0.2;
          snowflake.style.animationDuration = duration + "s";

          setTimeout(() => {
              snowflake.remove();
          }, duration * 1000);
      }

      let intervalTime = window.innerWidth < 768 ? 500 : 300;
      setInterval(createSnowflake, intervalTime);
  }
});

