

window.onscroll = function() {
  //show vspl icon on navbar on scroll
myID = document.getElementById("logo_nav");
scrollup=document.getElementById("up-arrow");
// zoutID=document.getElementById("nav-head-up");
  var y = window.scrollY;

  if (y>=40) {
    // console.log(y);
      // console.log("scrolling.............")
      // logo on scroll popup in navbar
    myID.classList.add("nav-logo-show");
    myID.classList.add("zoomIn");
    myID.classList.remove("nav-logo-hide");
    myID.classList.remove("zoomOut");
    //scroll to top button
    scrollup.classList.add("nav-logo-show");
    scrollup.classList.remove("nav-logo-hide");
    
  } else {
    // console.log("not scrolling.............")
     // logo on scroll vanish in navbar
    myID.classList.add("zoomOut");
    myID.classList.add("nav-logo-hide");
    myID.classList.remove("nav-logo-show");
    myID.classList.remove("zoomIn");  

    //scroll to top button
    scrollup.classList.remove("nav-logo-show");
    scrollup.classList.add("nav-logo-hide");
  }
  let mainNavLinks = document.querySelectorAll(".side-nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight +110> fromTop
    ) {
      link.classList.add("current");
      console.log("event listener window")
    } else {
      link.classList.remove("current");
    }
  });
});
};



