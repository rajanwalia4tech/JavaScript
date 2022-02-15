// A promise is an object that returns a value in the future.
// A promise starts in the pending state and ends in either fulfilled state or rejected state.
// Use then() method to schedule a callback to be executed when the promise is fullfiled,
// and catch() method to schedule a callback to be invoked when the promise is rejected.
// Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.

// var userLoggedIn = true;

// var promise = new Promise( (resolve,reject)=>{
// 	// wait for 2 sec
// 	setTimeout( ()=>{
// 		// Promise is resolved
// 		if(userLoggedIn)
// 			resolve();
// 		else
// 			reject();
// 	},2000)

// })

// setTimeout(()=>{
// 	userLoggedIn = false;
// },1000);

// promise.then(()=>{ // then is for resolve
// 	console.log("User Logged IN");
// }).catch(()=>{ // catch is for reject
// 	console.log("user not loggedIn");
// })

// In general we wrap the Promise in function and that function returns the promise
var userLoggedIn = true;
function checkUserLoggedIn() {
  var promise = new Promise((resolve, reject) => {
    // wait for 2 sec
    setTimeout(() => {
      // Promise is resolved
      if (userLoggedIn) resolve("User   Logged In");
      else reject("User Not logged In");
    }, 2000);
  });
  return promise; // returning promise
}

setTimeout(() => {
  userLoggedIn = false;
}, 1000);
// console.log(checkUserLoggedIn()); print promise object

checkUserLoggedIn()
  .then((successMsg) => {
    // then is for resolve
    console.log(successMsg);
  })
  .catch((failureMsg) => {
    // catch is for reject
    console.log(failureMsg);
  });

// where promise is used
// Promise solves a problem of asynchoronous chaining request
/* 
 following is the pseudo code of aysynchrounous chaining
	$.ajax({
		success: function (response) {
			$.ajax({
		success: function (response) {
			$.ajax({
					success: function (response) {
						
					}
				});
			}
		});
	}
});
*/

// we can achieve the same above thing using promises in JS
//  promise.then().then().then().then().catch()

/* promise in real life let say we have a social media website
	how user logged in and what happens
	1. User LogIn
	2. fetch user feeds
	3. fetch User friends
	4. fetch User Messages etc.
	
	we can achieve this thing using promise
	
	checkUserLoggedIn().then(fetchUserFeeds).then(fetchUserFriends).then(fetchUserMessages).catch();
	here checkUserLoggedIn() returns a promise 
	then checkUserLoggedIn().then(fetchUserFeeds)  this also returns a  promise
	then checkUserLoggedIn().then(fetchUserFeeds).then(fetchUserFriends) this also returns a promise
	checkUserLoggedIn().then(fetchUserFeeds).then(fetchUserFriends).then(fetchUserMessages) returns a promise
	
	if any of the promise is rejected then no function is called in then 
	catch is called for the reject
	
*/
