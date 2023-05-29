const pane = document.getElementById("pane");
const ad = document.getElementById("ad");
const letra = document.getElementById("letra");
const lona = document.getElementById("lona");
const letrero = document.getElementById("letrero");
const headers = document.querySelectorAll(".head3");


pane.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  pane.style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 30%, #4db5fa 88%,#1c4b6b), url('img/pane.jpg')";
  headers[0].classList.add("active");
  pane.style.backgroundSize = "100%";
  if (window.innerWidth>700) {
    pane.style.backgroundSize = "175%";
    headers[0].style.paddingLeft = "50px";
  }
});

pane.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  pane.style.backgroundImage = "url(/img/pane.jpg)";
  headers[0].classList.remove("active");
  pane.style.backgroundSize = "120%";
  if (window.innerWidth>700) {
    pane.style.backgroundSize = "185%";
  }
});

ad.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  ad.style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 30%, #4db5fa 88%,#1c4b6b), url('img/ad.jpg')";
  headers[1].classList.add("active");
  ad.style.backgroundSize = "100%";
  if (window.innerWidth>700) {
    ad.style.backgroundSize = "175%";
  }
});

ad.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  ad.style.backgroundImage = "url(/img/ad.jpg)";
  headers[1].classList.remove("active");
  ad.style.backgroundSize = "120%";
  if (window.innerWidth>700) {
    ad.style.backgroundSize = "185%";
  }
});

letra.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  letra.style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 30%, #4db5fa 88%,#1c4b6b), url('img/letra.jpg')";
  headers[2].classList.add("active");
  letra.style.backgroundSize = "100%";
  if (window.innerWidth>700) {
    letra.style.backgroundSize = "175%";
  }
});

letra.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  letra.style.backgroundImage = "url(/img/letra.jpg)";
  headers[2].classList.remove("active");
  letra.style.backgroundSize = "120%";
  if (window.innerWidth>700) {
    letra.style.backgroundSize = "185%";
  }
});

lona.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  lona.style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 30%, #4db5fa 88%,#1c4b6b), url('img/lona.png')";
  headers[3].classList.add("active");
  lona.style.backgroundSize = "170%";
});

lona.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  lona.style.backgroundImage = "url(/img/lona.png)";
  headers[3].classList.remove("active");
  lona.style.backgroundSize = "185%";
});

letrero.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  letrero.style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 30%, #4db5fa 88%,#1c4b6b), url('img/letrero.jpg')";
  headers[4].classList.add("active");
  letrero.style.backgroundSize = "100%";
  if (window.innerWidth>700) {
    letrero.style.backgroundSize = "170%";
  }
});

letrero.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  letrero.style.backgroundImage = "url(/img/letrero.jpg)";
  headers[4].classList.remove("active");
  letrero.style.backgroundSize = "120%";
  if (window.innerWidth>700) {
    letrero.style.backgroundSize = "185%";
  }
});
