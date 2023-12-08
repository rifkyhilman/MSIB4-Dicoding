// TODO: tampilkan teks pada notes.txt pada console.
const path = require('path');
const fs = require('fs');

const fileText = path.resolve(__dirname, 'notes.txt');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};


fs.readFile(fileText, 'UTF-8', fileReadCallback);
