//buttons variables
const discBtn = document.getElementById("discBtn");
const contactBtn = document.getElementById("contactBtn");

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

if (discBtn) {
  discBtn.addEventListener("click", () => {
    window.location.href = "about.html"
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "contact.html"
  });
}

// Snowflake animation
document.addEventListener("DOMContentLoaded",  () => {
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {

      function createSnowflake() {
          const snowflake = document.createElement("div");
          snowflake.innerHTML = "❄";
          snowflake.classList.add("snowflake");
          document.body.appendChild(snowflake);

          // Adjust size and number of flakes depending on screen size
          let screenWidth = window.innerWidth;
          let maxWidth = screenWidth * 0.95; // Max 95% of screen width

          // Smaller flakes on mobile, larger on desktop
          let size = screenWidth < 768 ? Math.random() * 10 + 5 + "px" : Math.random() * 15 + 10 + "px";
          
          // Adjust fall speed - slower on larger screens
          let duration = screenWidth < 768 ? Math.random() * 3 + 2 : Math.random() * 5 + 3; 

          snowflake.style.left = Math.random() * maxWidth + "px";
          snowflake.style.fontSize = size;
          snowflake.style.opacity = Math.random() * 0.8 + 0.2;
          snowflake.style.animationDuration = duration + "s";

          // Remove snowflakes after they have fallen
          setTimeout(() => {
              snowflake.remove();
          }, duration * 1000);
      }

      // Adjust frequency of flakes depending on screen size (mobile = fewer flakes)
      let intervalTime = window.innerWidth < 768 ? 500 : 300; // Mobile: 500ms, Desktop: 300ms
      setInterval(createSnowflake, intervalTime);
  }
});

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


// console.log("Script loaded"); // remove this line once you have confirmed that the script is linked