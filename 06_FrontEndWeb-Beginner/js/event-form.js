document.addEventListener('DOMContentLoaded', function () {
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

// dibawah ini adalah fungsi event oninput pada DOM
    document.getElementById('inputNama').addEventListener('input', function () {
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;
        
        console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
        console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();
        
        if (sisaKarakterUpdate === 0) {
          document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
        } else if (sisaKarakterUpdate <= 5) {
          document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
          document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
      });

// dibawah ini adalah event onFocus untuk mengubah style visible pada element yang di hidden
      document.getElementById('inputNama').addEventListener('focus', function () {
        console.log('inputNama: focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
      });

// dibawah ini adalah event onBlur untuk mengubah style visible kembali ke hidden
      document.getElementById('inputNama').addEventListener('blur', function () {
        console.log('inputNama: blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
      });

// dibawah ini adalah event onChange untuk Captcha
      document.getElementById('inputCaptcha').addEventListener('change', function () {
        console.log('inputChaptcha: change');
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');
        
        if (inputCaptcha === 'PRNU') {
          submitButtonStatus.removeAttribute('disabled');
        } else {
          submitButtonStatus.setAttribute('disabled', '');
        }
      });

      document.getElementById('formDataDiri').addEventListener('submit', function (event) {
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        if (inputCaptcha === 'PRNU') {
          alert('Selamat! Captcha Anda lolos :D');
        } else {
          alert('Captcha Anda belum tepat :(');
          document.getElementById('submitButton').setAttribute('disabled', '');
        }
        event.preventDefault();
      });

// dibawah ini adalah event onCopy pada field copy
      document.getElementById('inputCopy').addEventListener('copy', function () {
        alert('Anda telah men-copy sesuatu...');
      });

// dibawah ini adalah event onPaste pada field paste
      document.getElementById('inputPaste').addEventListener('paste', function () {
        alert('Anda telah mem-paste sebuah teks...');
      });
  });

