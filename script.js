const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const heart = document.getElementById("heart");
const message = document.getElementById("message");

// ✅ TWÓJ FORMPSREE
const FORM_ENDPOINT = "https://formspree.io/f/xpqlvvzv";

// ===== TAK =====
yesBtn.addEventListener("click", () => {
  heart.style.display = "block";
  message.innerText = "🥰 Wiedziałem! 💕";
  startConfetti();

  fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      answer: "TAK 💖",
      time: new Date().toLocaleString(),
      page: window.location.href
    })
  });
});

// ===== NIE UCIEKA =====
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// ===== KONFETTI =====
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 200; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 5 + 2,
      color: `hsl(${Math.random() * 360},100%,50%)`
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(animateConfetti);
}
