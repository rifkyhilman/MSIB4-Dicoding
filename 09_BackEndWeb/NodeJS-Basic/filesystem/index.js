// TODO: tampilkan teks pada notes.txt pada console.
const path = require('path');
const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

const file = path.resolve(__dirname, 'notes.txt');
 
fs.readFile(file, 'UTF-8', fileReadCallback);