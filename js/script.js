// import projects from "./projects";

// Declarations
const mobileBars = document.getElementById("mobileBars");

// Events
mobileBars.addEventListener("click", toggleMenu);

// Functions
function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
}
