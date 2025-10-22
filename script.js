const score = 75;
if (score >= 90) {
  console.log('Отлично');
} else if (score >= 60) {
  console.log('Хорошо');
} else {
  console.log('Нужно подтянуть');
}

const result = score >= 60 ? 'зачёт' : 'незачёт';
console.log(result);

const user = 'Olia';
const points = 42;
const msg = `Привет, ${user}! У тебя ${points} очков.`;
console.log(msg);

let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(10 % 3);
console.log(8 % 2);
console.log(7 / 2);
console.log(5 * 3);
console.log('6' * '7');
console.log(10 - 4);
console.log(2 + 3);
console.log('Привет, ' + 'мир!');

console.log("error");
console.warn("error");
console.error("error");
console.table("error");

let age = 20;
const pi = 3.14;
var legacy = 'old';

let name = 'Olia';
let isAdmin = false;
let nothing = null;
let unknown;

console.log(typeof age);
console.log(typeof name);

function showGreeting(message) {
  const g = document.getElementById('greeting');
  if (g) {
    g.textContent = message;
  }
}

function askNameAndGreet() {
  let name = null;

  while (!name) {
    name = prompt("What is your name?");
    
    if (name === null || name.trim() === "") {
      showGreeting("This is Optional");
    } else {
      showGreeting(`Hi, ${name.trim()}!`);
      break;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const greetBtn = document.getElementById('greetBtn');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const scrollBtn = document.getElementById('scrollBtn');
  const form = document.getElementById('contact-form');

  // Greeting button
  if (greetBtn) {
    greetBtn.addEventListener('click', askNameAndGreet);
  }

  // Menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return; 
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id); 
    });
  });
  

  // Scroll-to-top visibility when near bottom
  window.addEventListener('scroll', () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (scrollBtn) {
      if (nearBottom) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    }
  });

  // Scroll-to-top click
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact form
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      alert('Thank you! Your message has been submitted.');
      form.reset();
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});





