const toggleBtn = document.getElementById('toggle_btn');
const menu = document.getElementById('menu');
const icon = document.getElementById('icon');
const slides = document.querySelectorAll('.slides img');
let slideIndex = 1;
const place = document.getElementById('caption');

//Abrir el menu
toggleBtn.addEventListener('click', function() {

  if(menu.style.display != 'block'){
    menu.style.display = 'block';
    icon.classList.add('fa-x');
    icon.classList.remove('fa-bars');
  } else {
    menu.style.display = 'none';
    icon.classList.remove('fa-x');
    icon.classList.add('fa-bars');
  }
});

//Slider
function showSlides(n) {
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
    slides[slideIndex - 1].style.display = 'block';
    place.textContent = '';
    place.style.transform = 'translateY(100%) translateX(0%)';
    
    setTimeout(() => {
    place.textContent = slides[slideIndex-1].getAttribute("alt");
    place.style.transform = 'translateY(0) translateX(0%)';
    }, 1500);

}

function plusSlides(n) {showSlides(slideIndex += n);}

showSlides(slideIndex);
document.querySelector('.prev').addEventListener('click', () => {plusSlides(-1);});
document.querySelector('.next').addEventListener('click', () => {plusSlides(1);});