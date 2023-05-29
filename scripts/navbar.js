const burga = document.getElementById("burga");

var ismobile = () =>{
    window.innerWidth <= 700
}

document.getElementById("icon").addEventListener("click", (e) => {
  e.preventDefault();
  if (burga.classList.contains("active")) {
    burga.classList.remove("active");
    console.log(ismobile)
    return;
  }
  burga.classList.add("active");
});

function renderhome(){

}

function renderabout(){

}

function rendercontact(){

}