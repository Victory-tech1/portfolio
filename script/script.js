/*  Nav Button functionality  */

const navBtn = document.getElementById('nav-btn');
const navLinks = document.getElementById('nav-links-mob');
const line1 = document.getElementById('nav-btn-line1');
const line2 = document.getElementById('nav-btn-line2');

navBtn.addEventListener('click', () => {
  if (navLinks.style.display === 'none') {
    navLinks.style.display = 'flex';
    navLinks.style.animation = 'element_appear 1s forwards';
    line1.style.animation = 'line1-anim 0.5s forwards';
    line2.style.animation = 'line2-anim 0.5s forwards';
  } else {
    navLinks.style.display = 'none';
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
      element.style.animation = 'elements_appear_onscroll 1s';
    };
}})

/*  Slide through testimonials funtionality  */

const TestimonialItems = document.getElementsByClassName('testimonial-item'),
prevBtn = document.getElementById('prev-btn'),
nextBtn = document.getElementById('next-btn');
let index = 0,
currentItem = TestimonialItems[index];
currentItem.style.display = 'flex';

prevBtn.addEventListener('click', () => {
  if (index < 0) {
    index = TestimonialItems.length - 1;
  } else if (index > TestimonialItems.length){
    index = 0;
  } else {
    TestimonialItems[index].style.animation = 'slide_in 0.5s reverse backwards';
    TestimonialItems[index].style.display = 'none';
    TestimonialItems[index - 1].style.animation = "slide_out 0.5s reverse backwards";
    TestimonialItems[index - 1].style.display = 'flex';
    index--;
  };
})
nextBtn.addEventListener('click', () => {
  if (index < 0) {
    index = TestimonialItems.length - 1;
  } else if (index > TestimonialItems.length){
    index = 0;
  } else {
    TestimonialItems[index].style.animation = 'slide_out 0.5s forwards';
    TestimonialItems[index].style.display = 'none';
    TestimonialItems[index + 1].style.animation = 'slide_in 0.5s forwards';
    TestimonialItems[index + 1].style.display = 'flex';
    index++;
  };
})

/*function print() {
  while (index < TestimonialItems.length){
    console.log(currentItem);
    index++;
  };
}
print();*/
