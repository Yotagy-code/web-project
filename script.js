// ======================
// Typing Animation
// ======================
const texts = ['Developer', 'Designer', 'Freelancer', 'Creator'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeText() {
  const typedTextElement = document.getElementById('typed-text');
  if (!typedTextElement) return;

  const currentText = texts[textIndex];

  if (isDeleting) {
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 2000; // Пауза перед удалением
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500; // Пауза перед новым словом
  }

  setTimeout(typeText, typingSpeed);
}

// ======================
// Scroll Reveal Animation
// ======================
function revealOnScroll() {
  const reveals = document.querySelectorAll('.scroll-reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('revealed');
    }
  });
}

// ======================
// Основная логика после загрузки страницы
// ======================
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const scrollBtn = document.getElementById('scrollBtn');
  const form = document.getElementById('contact-form');
  const themeToggle = document.getElementById('themeToggle');

  // Меню-бургер
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
  }

  // Плавная прокрутка по якорным ссылкам
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', link.getAttribute('href'));
      
      // Закрываем мобильное меню после клика
      if (navLinks) navLinks.classList.remove('active');
    });
  });

  // Появление кнопки "вверх" при прокрутке вниз
  window.addEventListener('scroll', () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (scrollBtn) scrollBtn.classList.toggle('show', nearBottom);
    
    // Вызываем scroll reveal
    revealOnScroll();
  });

  // Инициализация scroll reveal при загрузке
  revealOnScroll();

  // Запуск typing animation
  setTimeout(typeText, 1000);

  // Клик по кнопке "вверх"
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Отправка контактной формы
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been submitted.');
      form.reset();
    });
  }

  // --- Смена темы ---
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');

      // Меняем иконку
      themeToggle.textContent = isLight ? '☀️' : '🌙';
    });
  }
});
