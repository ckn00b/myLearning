const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "utf-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");

// writeStream.write("hello");          writes to file
// writeStream.write(" world\n");

// readStream.on("data", (data) => {    reads data and writes to file
//   writeStream.write(data);
// });

readStream.pipe(writeStream); // reads and writes to file
