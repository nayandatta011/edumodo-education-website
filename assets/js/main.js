// console.log('js connected');
// Navabar Toggle 
const toggleBtn = document.querySelector('.navbar__btn');
const navItems = document.querySelector('.nav__items');
const navMob = document.querySelector('.navbar__mobile');

toggleBtn.addEventListener('click', () => {
    navItems.classList.toggle('navbar__mobile');
});