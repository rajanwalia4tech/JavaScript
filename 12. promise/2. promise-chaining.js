// When you return a value in the then() method, the then() method returns a new Promise that immediately resolves to the return value.

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("start");
    resolve(10);
    console.log("end");
  }, 300);
});

let p1 = p.then((res) => {
  console.log(res);
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("start then ");
      resolve(20);
      console.log("end then");
    }, 300);
  });
});

(async function () {
  console.log(p1);
  let d = await p1;
  console.log(d);
})();
