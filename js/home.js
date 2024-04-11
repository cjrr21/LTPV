const toggleBtn = document.getElementById('toggle_btn');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('toggle_btn');


//Abrir el menu
toggleBtn.addEventListener('click', function() {
  menu.classList.toggle('open');
});

//Cambiar Icono
if(menu.classList.contains('open')){
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
} else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
}


