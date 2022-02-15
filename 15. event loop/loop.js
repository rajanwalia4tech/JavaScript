/* Every Node program is run in a single thread and Inside this single thread there is event loop. 
Event loop is like a controller structure that decide what our one thread should be doing any given point in time.

*/

// Following is the fake code to show how event loop works

// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New Timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one : Any pending setTimeout, setInterval, setImmediate?
  // Check two : Any pending OS tasks? (like http server listening on PORT)
  // Check three : Any pending long running operations? (Like fs module)

  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entire body runs in one 'tick'
while (shouldContinue()) {
  // 1. Node looks at pendingTimers and sees if any functions are ready to called. setTimeout, setInterval
  // 2. Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3. Pause execution. Continue When ...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete
  // 4. Look at pendingTimers. Call any setImmediate
  // 5. Handle any 'close' events
}

// exit back to terminal
