window.slide = new SlideNav();
var nav = new SlideNav({
    activeClass: "active",
    toggleButtonSelector: false,
    toggleBoxSelector: false,
    hideAfterSelect: true,
    speed: 70,
    changeHash: false,
    navBoxToggleClass: false
});

// nav menu
/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Add white backgroud to fixed nav on scroll
var onScroll = document.getElementById('on-scroll');
window.onscroll = function () { 
    "use strict";
    if (document.documentElement.scrollTop >= 8 ) {
        onScroll.classList.add("header-scrolled");
    } 
    else {
        onScroll.classList.remove("header-scrolled");
    }
};