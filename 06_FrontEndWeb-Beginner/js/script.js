const Gambar = document.getElementById('gambar');
const tombol = document.querySelectorAll('.button');
const Playbutton = tombol[3];
const PlaybuttonElement = Playbutton.children[0];
const dicoding = document.getElementById('dicodingLink');
const buttons = document.getElementsByClassName('button');
const newElement = document.createElement('p');
newElement.innerText = "Testing method appendchild()";
const link = document.getElementById('links');
link.appendChild(newElement);

Gambar.setAttribute('height', 215);
Gambar.setAttribute('width', 300);
PlaybuttonElement.setAttribute('type', 'submit');
dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';

for (const button of buttons) {
  button.children[0].style.borderRadius = '16px';
}