const projects = [
  {
    name: "Music Player",
    url: "https://github.com/Gilbertosr5/MusicPlayer",
    img: "img/projects/MusicPlayer.PNG",
    text: "Sistema de Player de Música simples, onde a chave ta no mecanismo de passar a música e pausar. Principal: Javascript",
    category: "web",
  },
  {
    name: "UNIP Clone",
    url: "https://github.com/Gilbertosr5/UnipAluno-Clone",
    img: "img/projects/clone_unip.PNG",
    text: "Clone da Pagina do aluno da UNIP. Possui uma validação Simples com Local storage e uma pagina Home. Principal: CSS",
    category: "web",
  },
  {
    name: "Facebook Clone",
    url: "https://github.com/Gilbertosr5/FaceLoginClone",
    img: "img/projects/faceClone.PNG",
    text: "Clone muito simples da Página de Login do Facebook. Feito apenas para ver algumas coisas de Bootstrap.",
    category: "web",
  },
];

// Declarations
const mobileBars = document.getElementById("mobileBars");
const body = document.getElementsByTagName("body");

// Events
mobileBars.addEventListener("click", toggleMenu);

// Functions
function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
}

function addProject(btn) {
  document.querySelector(".cards").innerHTML = "";
  if (btn == "all") {
    document.querySelector(".nav-btn.selected").classList.remove("selected");
    document.querySelector(`#${btn}`).classList.add("selected");

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
        <a href="${projects[i].url}" target="_blank">See on GitHub</a>
      </div>
      </div>`;
      console.log(`${projects[i].name} added`);
    }
  } else if (btn == "react") {
    document.querySelector(".nav-btn.selected").classList.remove("selected");
    document.querySelector(`#${btn}`).classList.add("selected");

    for (let i in projects) {
      if (projects[i].category == btn) {
        document.querySelector(".cards").innerHTML += `<div class="card">
          <div class="card-img">
            <img src="${projects[i].img}" alt="${projects[i].name}" />
            <p class="card-name">${projects[i].name}</p>
          </div>
          <div class="card-text">
            <p>
              ${projects[i].text}
            </p>
            <a href="${projects[i].url}" target="_blank">See on GitHub</a>
          </div>
        </div>`;
        console.log(`${projects[i].name} added`);
      }
    }
  } else if (btn == "web") {
    document.querySelector(".nav-btn.selected").classList.remove("selected");
    document.querySelector(`#${btn}`).classList.add("selected");

    for (let i in projects) {
      if (projects[i].category == btn) {
        document.querySelector(".cards").innerHTML += `<div class="card">
          <div class="card-img">
            <img src="${projects[i].img}" alt="${projects[i].name}" />
            <p class="card-name">${projects[i].name}</p>
          </div>
          <div class="card-text">
            <p>
              ${projects[i].text}
            </p>
            <a href="${projects[i].url}" target="_blank">See on GitHub</a>
          </div>
        </div>`;
        console.log(`${projects[i].name} added`);
      }
    }
  } else if (btn == "ux") {
    document.querySelector(".nav-btn.selected").classList.remove("selected");
    document.querySelector(`#${btn}`).classList.add("selected");

    for (let i in projects) {
      if (projects[i].category == btn) {
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
    }
  }
  console.log(".");
  console.log(".");
}

addProject();
