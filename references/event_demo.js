const EventEmitter = require("events");

class MyEventEmitter extends EventEmitter {}

const myEventEmitter = new MyEventEmitter();

//Create a event listener
myEventEmitter.on("event", () => {
  console.log("Event fired...");
});

//Emit Event
myEventEmitter.emit("event1");
