/*  Nav Button functionality  */

const navBtn = document.getElementById('nav-btn');
const navLinks = document.getElementById('nav-links-mob');

navBtn.addEventListener('click', () => {
  if (navLinks.style.display == 'none' && navLinks.style.right == '20px') {
    navLinks.style.display = 'flex';
    navLinks.style.right = '20px';
  } else {
    navLinks.style.display = 'none';
    navLinks.style.right = '20px';
  }
})
