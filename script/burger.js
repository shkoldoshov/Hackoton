const mobileBtn = document.querySelector('.mobile-btn')
const navigator = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('show-mobile-btn')
    navigator.classList.toggle('show-nav')
    backdrop.classList.toggle('show-backdrop')



});


const navLi = document.querySelectorAll('li'); 
navLi.forEach(el => {
    el.addEventListener('click', () => {
        mobileBtn.classList.remove('show-mobile-btn')
        navigator.classList.remove('show-nav')
        backdrop.classList.remove('show-backdrop')
    });
});