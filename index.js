function toggleAnswer(question) {
  question.parentNode.classList.toggle('active-ans');
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-item').forEach((item) =>
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  );

  const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
    question.addEventListener('click', function () {
      toggleAnswer(this);
    });
  });
});
