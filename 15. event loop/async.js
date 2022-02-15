const http = require("https");

const start = Date.now();

function doRequest() {
  http
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

console.log("START");
doRequest();
doRequest();

console.log("DONE");
