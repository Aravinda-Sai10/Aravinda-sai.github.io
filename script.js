const roles = [
  "Agentic AI Intern @ Innomatics",
  "AI & ML Developer",
  "Aspiring Data Analyst",
  "Building Innovative AI Solutions"
];

let index = 0;
let char = 0;
const typingText = document.querySelector(".typing");

function typeEffect() {
  if (char < roles[index].length) {
    typingText.textContent += roles[index].charAt(char);
    char++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (char > 0) {
    typingText.textContent = roles[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 30);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();