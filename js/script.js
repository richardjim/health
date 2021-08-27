const toggleButton = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
const closebtn = document.querySelector(".closebtn");
closebtn.addEventListener("click", () => {
  html.toggle("hide");
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
  /*const navBar = document.querySelector(".navbar-head");
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("navBar").className = ".navbar-head";
    }  else  {
      document.querySelector("navBar").className = " ";
   }
  }*/
}

window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar-head");
  navbar.classList.toggle("active", window.scrollY > 0);
});

let slideSet = document.querySelectorAll(".slide"),
  previous = document.querySelector("#btnprev"),
  next = document.querySelector("#btnnext"),
  current = 0;
function reset() {
  for (let i = 0; i < slideSet.length; i++) {
    slideSet[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  slideSet[0].style.display = "block";
}
function slideLeft() {
  reset();
  slideSet[current - 1].style.display = "block";
  current--;
}
function slideRight() {
  reset();
  slideSet[current + 1].style.display = "block";
  current++;
}
//left:
previous.addEventListener("click", function () {
  if (current === 0) {
    current = slideSet.length;
  }
  slideLeft();
});
//right:

next.addEventListener("click", function () {
  if (current === slideSet.length - 1) {
    current = -1;
  }
  slideRight();
});
startSlide();

//input field

