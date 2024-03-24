

let open1 = document.querySelector('#bars')
console.log(open1)
let links1 = document.querySelector('#list')
console.log(links1)



open1.onclick = function () {
  links1.classList.add('close')
};

let close1 = document.querySelector('#close')
console.log(close1)

close1.onclick = function () {
  links1.classList.remove('close')
};





/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



let toggle = document.querySelector('#nav-toggle')
let body = document.querySelector('body')
let card= document.querySelector('.card_service')

toggle.onclick = function () {
    body.classList.toggle('dark')
    card.classList.toggle('dark')
}



const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home_text, .img_home,
            .text_about, .img_about,
            .cards_service,
            .contact, 
            .footer__content`, {
    interval: 50
})



const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});



