// === Navbar Toggle for Mobile ===
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.createElement("div");
  navToggle.classList.add("nav-toggle");
  navToggle.innerHTML = "☰";
  document.querySelector(".navbar").prepend(navToggle);

  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // === Product Search Filter ===
  const searchInput = document.querySelector(".search-box input");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const desc = card.querySelector("p").textContent.toLowerCase();
      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
