// console.log('js connected');
// Navabar Toggle 
const toggleBtn = document.querySelector('.navbar__btn');
const navItems = document.querySelector('.nav__items');

toggleBtn.addEventListener('click', () => {
    navItems.classList.toggle('show');
});