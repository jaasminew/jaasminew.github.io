let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

 

hoverTrigger.addEventListener('mouseleave', () => {

  hoverContainer.classList.remove('hovered');

});

 // Play the video automatically
 document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('autoplayVideo');
  video.play();
});

//navbar color control
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

function setActiveLink() {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      navLinks.forEach((link) => link.classList.remove('active-link'));
      navLinks[index].classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', setActiveLink);