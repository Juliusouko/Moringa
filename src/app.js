document.addEventListener("DOMContentLoaded", () => {
  const text = "Julius Ouko | Junior DevOps & Fullstack Developer  👋";
  const target = document.querySelector(".typewriter");
  let i = 0;

  function typeLetter() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeLetter, 100); // Adjust speed here
    }
  }

  typeLetter();
});
