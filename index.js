const fs = require('fs');

// Read a binary file and return its buffer
function readBinaryFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// Write a buffer to a binary file
function writeBinaryFile(filePath, buffer) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, buffer, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

// Flip the bytes of the buffer (bitwise NOT)
function flipBytes(buffer) {
  let flippedBuffer = Buffer.alloc(buffer.length);
  for (let i = 0; i < buffer.length; i++) {
    flippedBuffer[i] = ~buffer[i];  // Bitwise NOT operation
  }
  return flippedBuffer;
}

// Write a 32-bit integer at a specific position in the buffer
function writeInt32(buffer, position, value) {
  buffer.writeInt32LE(value, position);  // Little-endian
}

module.exports = {
  readBinaryFile,
  writeBinaryFile,
  flipBytes,
  writeInt32
};
