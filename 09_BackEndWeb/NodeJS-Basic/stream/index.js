/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const path = require('path');
const fs = require('fs');

const fileInput = path.resolve(__dirname, 'input.txt');

const readableStream = fs.createReadStream(fileInput, {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('data', (chunk) => {
    try {   
        writableStream.write(`${chunk}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});