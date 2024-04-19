const toggleBtn = document.getElementById('toggle_btn');
const menu = document.getElementById('menu');
const icon = document.getElementById('icon');


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

//Cambiar icono de submenu


