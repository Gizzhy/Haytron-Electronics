// Add functionality to show/hide subsections on hover
const navbarItems = document.querySelectorAll(".navbar-item");

navbarItems.forEach((item) => {
  const subsections = item.querySelector(".subsections");
  item.addEventListener("mouseenter", () => {
    subsections.style.display = "block";
  });

  item.addEventListener("mouseleave", () => {
    subsections.style.display = "none";
  });
});
