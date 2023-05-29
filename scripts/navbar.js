const burga = document.getElementById("burga");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

var ismobile = () => {
  window.innerWidth <= 700;
};

window.onload = rendercontact();

document.getElementById("icon").addEventListener("click", (e) => {
  e.preventDefault();
  if (burga.classList.contains("active")) {
    burga.classList.remove("active");
    return;
  }
  burga.classList.add("active");
});

function renderhome() {
  document.title = "Publicidad y Proyectos Visuales | Inicio";
  home.style.display = "flex";
  about.style.display = "none";
  contact.style.display = "none";
}

function renderabout() {
  document.title = "Publicidad y Proyectos Visuales | Sobre nosotros";
  home.style.display = "none";
  about.style.display = "flex";
  contact.style.display = "none";
}

function rendercontact() {
  document.title = "Publicidad y Proyectos Visuales | Contáctanos";
  home.style.display = "none";
  about.style.display = "none";
  contact.style.display = "flex";
}
