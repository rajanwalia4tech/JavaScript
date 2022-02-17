process.env.UV_THREADPOOL_SIZE = 5;
const express = require("express");
const cluster = require("cluster");
const crypto = require("crypto");
const app = express();

// Is the file being executed in Master Mode?
// Cluster Manager
if (cluster.isMaster) {
  // Cause index.js to be executed again but in child mode
  // creating the 4 NODE instances means 4 event loops
  cluster.fork();
  //cluster.fork();
  //   cluster.fork();
  //   cluster.fork();
} else {
  // I am a child, I am going to act like a server and do nothing else

  // The following function is blocking the node main thread for 5 seconds
  // That's why other request will queued up in event loop.
  function wait5min(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get("/", (req, res) => {
    wait5min(10000);
    return res.status(318).send("HELLO");
  });

  app.get("/slow", (req, res) => {
    wait5min(8000);
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
}
