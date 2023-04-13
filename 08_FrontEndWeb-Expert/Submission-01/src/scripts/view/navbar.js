const menu = document.querySelector('#menu');
const icon = document.querySelector('#menu-icon');
const drawer = document.querySelector('#drawer');

function toggleHamburger() {
  if(icon.textContent != `menu`) {
    drawer.classList.toggle('open');
    icon.innerText = `menu`;
  } else {
    drawer.classList.toggle('open');
    icon.innerText = `close`;
  }
 
}

menu.addEventListener('click', toggleHamburger);


document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyX' && (event.ctrlKey || event.metaKey)) {
    toggleHamburger()
  }
});