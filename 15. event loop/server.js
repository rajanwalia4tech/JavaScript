process.env.UV_THREADPOOL_SIZE = 1;
const express = require("express");
const cluster = require("cluster");
const crypto = require("crypto");
const app = express();

// The following function is blocking the node main thread for 5 seconds
// That's why other request will queued up in event loop.
function wait5min(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  //wait5min(10000);
  return res.status(318).send("HELLO");
});

app.get("/slow", (req, res) => {
  //wait5min(8000);
  return res.send("slow");
});

app.get("/fast", (req, res) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    return res.send("hi");
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log("ERROR  in connected server");
    return;
  }
  console.log("SERVER is listening at PORT:3000");
});
