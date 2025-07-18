const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

            hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            menu.classList.toggle('active');
        });
        
 document.getElementById('hamburger-menu').onclick = function() {
  document.getElementById('top-nav').classList.toggle('open');
  this.classList.toggle('open');
};