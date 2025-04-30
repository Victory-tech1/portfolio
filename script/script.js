/*  Nav Button functionality  */

const navBtn = document.getElementById('nav-btn'),
navLinks = document.getElementById('nav-links-mob'),
line1 = document.getElementById('nav-btn-line1'),
line2 = document.getElementById('nav-btn-line2');
let tog = 0;

navBtn.addEventListener('click', () => {
  if (tog == 0) {
    navLinks.style.display = 'flex';
    navLinks.style.animation = 'element_appear 0.5s forwards';
    line1.style.animation = 'line1-anim 0.5s forwards';
    line2.style.animation = 'line2-anim 0.5s forwards';
    tog = 1;
  } else {
    navLinks.style.display = 'none';
    navLinks.style.animation = 'element_appear 0.5s reverse backwards';
    line1.style.animation = 'line1-undo-anim 0.5s forwards';
    line2.style.animation = 'line2-undo-anim 0.5s forwards';
    tog = 0;
  }
})
document.addEventListener('scroll', () => {
  navLinks.style.display = 'none';
  navLinks.style.animation = 'element_appear 0.5s reverse backwards';
  line1.style.animation = 'line1-undo-anim 0.5s forwards';
  line2.style.animation = 'line2-undo-anim 0.5s forwards';
  tog = 0;
})
document.addEventListener("click", (event) => {
  if (
    !navLinks.contains(event.target) &&
    !navBtn.contains(event.target)
  ) {
    navLinks.style.display = 'none';
    navLinks.style.animation = 'element_appear 0.5s reverse backwards';
    line1.style.animation = 'line1-undo-anim 0.5s forwards';
    line2.style.animation = 'line2-undo-anim 0.5s forwards';
    tog = 0;
  }
});

/*  Elements to appear onscroll functionality  */
const allElements = document.body.getElementsByClassName('appear'),
topNav = document.getElementById('top-nav');

window.addEventListener('scroll', () => {
  topNav.style.transform = 'translate(0, -15px)';

  for (const element of allElements) {
    element.addEventListener('animationend', () => {
      element.style.opacity = '100%';
    })
    let rect = element.getBoundingClientRect();
    if(rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.style.animation = 'elements_appear_onscroll 1s';
    };
}})
/*
if (topNav.style.transform === 'translate(0, -15px)') {
  navLinks.style.marginTop = '55px';
} else {
  navLinks.style.marginTop = '70px';
}
*/
/*  Slide through testimonials funtionality  */

const testimonialItems = document.getElementsByClassName('testimonial-item'),
prevBtn = document.getElementById('prev-btn'),
nextBtn = document.getElementById('next-btn');
let index = 0,
currentItem = testimonialItems[index];
currentItem.style.display = 'flex';

prevBtn.addEventListener('click', () => {
  if (index == 0) {
    index = testimonialItems.length - 1;
    testimonialItems[index].style.animation = 'slide_out 0.5s reverse backwards';
    testimonialItems[index].style.display = 'flex';
    testimonialItems[0].style.animation = 'slide_in 0.5s reverse backwards';
    testimonialItems[0].style.display = 'none';
  } else {
    testimonialItems[index].style.animation = 'slide_in 0.5s reverse backwards';
    testimonialItems[index].style.display = 'none';
    testimonialItems[index - 1].style.animation = 'slide_out 0.5s reverse backwards';
    testimonialItems[index - 1].style.display = 'flex';
    index--;
  };
})
nextBtn.addEventListener('click', () => {
  if (index == testimonialItems.length - 1) {
    index = 0;
    testimonialItems[index].style.animation = 'slide_in 0.5s forwards';
    testimonialItems[index].style.display = 'flex';
    testimonialItems[testimonialItems.length - 1].style.animation = 'slide_out 0.5s forwards';
    testimonialItems[testimonialItems.length - 1].style.display = 'none';
  } else {
    testimonialItems[index].style.animation = 'slide_out 0.5s forwards';
    testimonialItems[index].style.display = 'none';
    testimonialItems[index + 1].style.animation = 'slide_in 0.5s forwards';
    testimonialItems[index + 1].style.display = 'flex';
    index++;
  };
})
