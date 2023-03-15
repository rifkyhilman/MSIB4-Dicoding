
// fungsi event onclik
function increment() {
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';
        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
        image.style.height = '400px';
        image.style.width = '500px';
        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}

// fungsi event onload pada kontent html
function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}

// dibawha ini adalah cara menggunakan fungsi ke element html secara noob
// document.getElementById('incrementButton').onclick = increment;
// document.body.onload = welcome;

window.addEventListener('load', welcome);
document.getElementById('incrementButton').addEventListener('click', increment);
