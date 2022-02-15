const p1 = new Promise((resolve, reject) => {
  resolve("Promise 1 Resolved!");
});

const p2 = new Promise((resolve, reject) => {
  reject("Promise 2 reject!");
});

const p3 = new Promise((resolve, reject) => {
  resolve("Promise 3 Resolved!");
});

const promises = Promise.all([p1, p2, p3]);
// Promise.all-> takes an array of promises returns a promise and if any of the promises is rejected then it will also be rejected
console.log(promises);
promises
  .then((results) => {
    results.forEach((res) => {
      console.log(res);
    });
  })
  .catch((err) => {
    console.log(err);
  });
