process.env.UV_THREADPOOL_SIZE = 2;
const http = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

// HTTP request is not executed using THREADPOOL, This are directly executed by OS.
function doRequest() {
  http
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("HTTP : ", Date.now() - start);
      });
    })
    .end();
}
let i = 0;
function doHash() {
  // Executed using THREADPOOL
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`HASH ${i++}:  `, Date.now() - start);
  });
}

doRequest();
// Executed using THREADPOOL
fs.readFile("multitask.js", "utf8", () => {
  console.log("FS : ", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();

// How fs.readFile works?
/*

1. we call fs.readFile function
2. Node gets some stats like file size etc. of the file (this requires HD access)
3. Hard Disk accessed, stats returned. ---- This is a pause for the thread execution means some another task may execute if any
4. Node request to read the file
5. Hard Disk accessed, File contents streamed back to the application --- This is also a pause for the thread execution
6. Node returns file contents to us.

*/
