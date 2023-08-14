// Add functionality to show/hide subsectionpcspc on hover
const navbarItemspcspc = document.querySelectorAll(
  ".navbar-itempc, .navbar-itempc2, .navbar-itempc3, .navbar-itempc4, .navbar-itempc5, .navbar-itempc6"
);

navbarItemspcspc.forEach((item) => {
  const subsectionpcspc = item.querySelector(
    ".subsectionpcspc, .subsectionpcspc2, .subsectionpcspc3, .subsectionpcspc4, .subsectionpcspc5, .subsectionpcspc6"
  );
  item.addEventListener("mouseenter", () => {
    subsectionpcspc.style.display = "block";
    // subsectionpcspc2.style.display = "block";
  });

  item.addEventListener("mouseleave", () => {
    subsectionpcspc.style.display = "none";
  });
});
// navbarItems.forEach((item) => {
//   const subsectionpcspc2 = item.querySelector(".subsectionpcspc2");
//   item.addEventListener("mouseenter", () => {
//     subsectionpcspc2.style.display = "block";
//   });

//   item.addEventListener("mouseleave", () => {
//     subsectionpcspc2.style.display = "none";
//   });
// });
