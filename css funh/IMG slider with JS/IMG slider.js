// it did  not work on my leptop


const slidimg = document.querySelectorAll(".slid-img");
const slidcontainer = document.querySelector(".slids-container");
const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");
const navigationdots = document.querySelector(".navigation-dots");

let nuberOfImages = slidimg.length;
let slidwidth = slidimg[0].clientWidth;
// Set Up the slider 

function init() {
     /*
     slidimg [0] = 0
     slidimg[1]=100%
     slidimg[2]=200%
     */


     slidimg.forEach((img, i) => {
         img.style.left = i * 100 + "%";
     });

     slidimg[0].classList.add("active")
     CreatNavigationDots()
}

init();


// Creat navigation dots 

function CreatNavigationDots() {
    for (let i = 0; i <nuberOfImages ; i++) {
        const dot = document.createElement["div"];
        dot.classList.add("single-dot");
        navigationdots.appendChild(dot);
    }
    navigationdots.children[0].classList.add("active");
}

// nect btn

nextbtn.addEventListener("click", ()=>{
  slidcontainer.style.transform = "translateX(-" + slidwidth + "px)";
})