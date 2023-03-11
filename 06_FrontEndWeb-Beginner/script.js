let Gambar = document.getElementById('gambar');
let tombol = document.querySelectorAll('.button');
let Playbutton = tombol[3];
let PlaybuttonElement = Playbutton.children[0];

Gambar.setAttribute('height', 215);
Gambar.setAttribute('width', 300);
PlaybuttonElement.setAttribute('type', 'submit');