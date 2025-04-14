/*  Nav Button functionality  */

const navBtn = document.getElementById('nav-btn');
const navLinks = document.getElementById('nav-links-mob');
const line1 = document.getElementById('nav-btn-line1');
const line2 = document.getElementById('nav-btn-line2');

navBtn.addEventListener('click', () => {
  if (navLinks.style.display === 'none') {
    navLinks.style.display = 'flex';
    navLinks.style.right = '20px';
    line1.style.animation = 'line1-anim 0.5s forwards';
    line2.style.animation = 'line2-anim 0.5s forwards';
  } else {
    navLinks.style.display = 'none';
    navLinks.style.right = '20px';
    line1.style.animation = 'line1-undo-anim 0.5s forwards';
    line2.style.animation = 'line2-undo-anim 0.5s forwards';
  }
})

/*  Elements to appear onscroll functionality  */
const allElements = document.body.getElementsByClassName('appear');

window.addEventListener('scroll', () => {
  for (const element of allElements) {
    element.addEventListener('animationend', () => {
      element.style.opacity = '100%';
    })
    let rect = element.getBoundingClientRect();
    if(rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.style.animation = 'elements_appear_onscroll 2s';
    };
}})