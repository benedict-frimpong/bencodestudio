// 🎯 Scroll smoothly to the Projects section when the 'See Our Work' button is clicked
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor behavior
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to #projects section
});

// 🎯 Add or remove the 'scrolled' class on the navbar when the user scrolls down
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    // Add 'scrolled' class for background or shadow effect
    navbar.classList.add('scrolled');
  } else {
    // Remove class when at top of page
    navbar.classList.remove('scrolled');
  }
});

// 🎯 Highlight active nav link based on current scroll position
const sections = document.querySelectorAll("section[id]"); // Get all sections with an ID
const navLinks = document.querySelectorAll(".nav-links a"); // Get all navigation links

window.addEventListener("scroll", () => {
  let current = ""; // Track the current section in view

  // Loop through all sections to determine which one is in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Offset to account for sticky navbar
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id"); // Store the ID of the current section
    }
  });

  // Loop through all nav links and highlight the one matching the current section
  navLinks.forEach((link) => {
    link.classList.remove("active"); // Remove active from all links first
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active"); // Add active to the matching link
    }
  });
});


  // Get filter buttons and project cards
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

