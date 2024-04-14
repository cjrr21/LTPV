const toggleBtn = document.getElementById('toggle_btn');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('toggle_btn');


//Abrir el menu
toggleBtn.addEventListener('click', function() {
  menu.classList.toggle('open');
});



