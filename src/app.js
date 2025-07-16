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

// Clear form after submission
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (e) {
    // Wait a bit before clearing to give time for redirect
    setTimeout(() => {
      form.reset();
    }, 500);
  });

   const contactSection = document.getElementById("contact");
  const showContactBtn = document.getElementById("show-contact");

  showContactBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent jump to #contact
    contactSection.classList.remove("hidden");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });