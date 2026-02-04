const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const heart = document.getElementById("heart");
const message = document.getElementById("message");
const main = document.getElementById("main");
const error = document.getElementById("error");

const FORM_ENDPOINT = "https://formspree.io/f/xpqlvvzv";

// ===== TAK =====
yesBtn.addEventListener("click", () => {
  heart.style.display = "block";
  message.innerText = "🥰 Wiedziałem! 💕";

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

// ===== NIE → FAKE AWARIA =====
noBtn.addEventListener("click", () => {
  main.style.display = "none";
  error.style.display = "block";
});
