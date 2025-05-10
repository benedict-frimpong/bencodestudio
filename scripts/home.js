
// Scroll to #projects when "See Our Work" is clicked
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.querySelector('.btn');
  const projectsSection = document.querySelector('#projects');

  if (scrollBtn && projectsSection) {
    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
