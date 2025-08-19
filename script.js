// Fetch GitHub profile image
const username = "prashanth681";
const profilePic = document.getElementById("profile-pic");

fetch(`https://api.github.com/users/${username}`)
  .then(res => res.json())
  .then(data => {
    profilePic.src = data.avatar_url;
  });

// Typing animation
const textArray = [
  "Hello World! I'm Prashant R",
  "Engineer in progress...",
  "Python Learner 🐍",
  "Let's build something cool!"
];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
