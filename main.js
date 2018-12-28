function openMenu() {
  document.getElementById('menu').style.display='flex'
}
function closeMenu() {
  document.getElementById('menu').style.display='none'
}

document.addEventListener('DOMContentLoaded', function() {

  // OPEN MENU
  var menuButton = document.getElementById('open-menu-btn')
  menuButton.addEventListener("click", openMenu);
  
  // CLOSE MENU
  var closeButton = document.getElementById('close-menu-btn')
  closeButton.addEventListener("click", closeMenu);

  document.querySelector('#menu a').addEventListener("click", closeMenu)
  
}, false);