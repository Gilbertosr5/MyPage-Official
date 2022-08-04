const projects = [
  {
    name: "Music Player",
    url: "https://github.com/Gilbertosr5/MusicPlayer",
    img: "img/projects/MusicPlayer.PNG",
    text: "A simple Music Player system. With this you can listen your favorites songs and more! principal Language: Javascript",
    category: "Web App",
  },
  {
    name: "UNIP Clone",
    url: "https://github.com/Gilbertosr5/UnipAluno-Clone",
    img: "img/projects/clone_unip.PNG",
    text: "A clone of UNIP Student Page, and this project have a simple login validation with Local Storage. Principal Language: CSS",
    category: "Web App",
  },
  {
    name: "Facebook Clone",
    url: "https://github.com/Gilbertosr5/FaceLoginClone",
    img: "img/projects/faceClone.PNG",
    text: "A Very simple Facebook Clone. It's just a single page & I used Bootstrap v5.1 to do it.",
    category: "Web App",
  },
];

// Declarations
const mobileBars = document.getElementById("mobileBars");

// Events
mobileBars.addEventListener("click", toggleMenu);

// Functions
function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
}

function addProject() {
  console.log("==============================================");
  console.log("Adding Projects to Projects Area");
  console.log("----------------------------------------------");
  for (let i in projects) {
    document.querySelector(".cards").innerHTML += `<div class="card">
    <div class="card-img">
      <img src="${projects[i].img}" alt="${projects[i].name}" />
      <p class="card-name">${projects[i].name}</p>
    </div>
    <div class="card-text">
      <p>
        ${projects[i].text}
      </p>
      <a href="${projects[i].url}">See on GitHub</a>
    </div>
    </div>`;
    console.log(`${projects[i].name} added`);
  }
  console.log("==============================================");
}

addProject();
