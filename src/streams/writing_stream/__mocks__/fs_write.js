module.exports = function (fd, chunk, callback) {
  return chunk.setEncoding('utf-8');
};

/* fs.close(file_descriptor, (err) => {
  if (err)
    console.error('Failed to close file', err);
  else {
    console.log("\n> File Closed successfully");
  }
}); */
