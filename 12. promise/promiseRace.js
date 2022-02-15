const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 2 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject(20);
  }, 1 * 1000);
});

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The third promise has resolved");
//     resolve(30);
//     console.log("DONE P3");
//   }, 1 * 3000);
// });

// Promise.race([p1, p2])
//   .then((value) => console.log(`Resolved: ${value}`))
//   .catch((reason) => console.log(`Rejected: ${reason}`));

Promise.race([p1, p2]).then(
  (value) => console.log(`Resolved: ${value}`),
  (reason) => console.log(`Rejected: ${reason}`)
);
console.log("HELLO");
// Promise.race-> takes an array of promises returns the first promise which is either rejected or resolved
