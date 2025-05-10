
// Filter projects by category on archive page
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-filter");

        projectCards.forEach(card => {
          const cardCategory = card.getAttribute("data-category");

          card.style.display = (category === "all" || cardCategory === category) ? "block" : "none";
        });
      });
    });
  }
});
