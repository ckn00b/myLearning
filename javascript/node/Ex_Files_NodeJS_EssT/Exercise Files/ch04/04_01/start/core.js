const path = require("path");

// const dirUploads = path.join(__dirname, "www", "files", "uploads");

// console.log(dirUploads);

const /* util */ { log } = require("util");

// util.log(path.basename(__filename));

// util.log(" ^ the name of the current file");

const /* v8 */ { getHeapStatistics } = require("v8");

/* util. */ log(/* v8. */ getHeapStatistics());
// can remove util and v8 by only requiring particular functions
