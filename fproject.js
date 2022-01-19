let searchBtn= document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn= document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose= document.querySelector('form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn =document.querySelector('videobtn');


window.onscroll= () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove ('active'); 
    menu.classList.remove('fa-times');
    navbar.classList.remove ('active'); 
    loginForm.classList.remove('active');
}
addeventlistenner('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active'); 

});
searchBtn.addeventlistenner('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active'); 

});

formBtn.addeventlistenner('click',() =>{
    loginForm.classList.add('active');
});

formClose.addeventlistenner('click',() =>{
    loginForm.classList.remove('active');
});
 videoBtn.forEach(btn =>{
     btn.addeventlistenner('click',()=>{
         document.querySelector('.controls.active').classList.remove('active');
         btn.classList.add('active');
         let src= btn.getAttribute('data-src');
         document.querySelector('#video-slider').src = src;

     });
 });