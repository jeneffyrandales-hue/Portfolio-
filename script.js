// Jeneffyr's Little Corner — simple interactive features
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });

  // Filter memory cards by category.
  const filterButtons = document.querySelectorAll(".filter");
  const memoryCards = document.querySelectorAll(".memory-card");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.filter;
      memoryCards.forEach(card => {
        card.hidden = category !== "all" && card.dataset.category !== category;
      });
    });
  });

  // Portfolio questions are answered from the visible website content.
  const answers = {
    study: "Jeneffyr is a third-year Bachelor of Science in Business Administration student majoring in Financial Management.",
    achievements: "She has been an honor student since grade school and continues to work on discipline, responsibility, perseverance, and learning.",
    music: "She loves BTS and Taylor Swift, whose music accompanies different moods, moments, and memories.",
    sky: "She loves watching the sky change colors because it reminds her that change can be beautiful. She also loves sunsets and the sea."
  };
  const answerBox = document.getElementById("answerBox");
  document.querySelectorAll("[data-question]").forEach(button => {
    button.addEventListener("click", () => {
      answerBox.textContent = answers[button.dataset.question] || "Thanks for asking about Jeneffyr!";
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
