const questions = [
  "Gavhar, bugun kechqurun bandmisiz?",
  "Men bilan vaqt o'tkazishni xohlaysizmi?",
  "Kechki ovqatga tayyormisiz?"
];

let step = 0;

const intro = document.getElementById('intro');
const quiz = document.getElementById('quiz');
const ticket = document.getElementById('ticket');

const openBtn = document.getElementById('openBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionEl = document.getElementById('question');

openBtn.addEventListener('click', () => {
  intro.hidden = true;
  quiz.hidden = false;
  questionEl.textContent = questions[step];
});

yesBtn.addEventListener('click', () => {
  step++;

  if (step < questions.length) {
    questionEl.textContent = questions[step];
  } else {
    quiz.hidden = true;
    ticket.hidden = false;
    celebrate();
  }
});

function moveNoButton() {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 60 - 30;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  const variants = [
    "Bandman 🙈",
    "Balki?",
    "Keyinroq 😅",
    "O'ylab ko'raman 🤔"
  ];

  noBtn.textContent = variants[Math.floor(Math.random() * variants.length)];
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
}, { passive: false });

function celebrate() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.textContent = '❤';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (20 + Math.random() * 20) + 'px';
    heart.style.opacity = '0.9';
    heart.style.zIndex = '9999';
    heart.style.transition = 'transform 2s linear, opacity 2s linear';
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-120vh) rotate(${Math.random()*360}deg)`;
      heart.style.opacity = '0';
    });

    setTimeout(() => heart.remove(), 2000);
  }
}