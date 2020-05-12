const path = require("path");
const fs = require("fs");

//Make dir
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Directory created!");
});

//Write in a File
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World",
  (err) => {
    if (err) throw err;
    console.log("Written to...");
  }
);

//Append to a File
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello from Node JS",
  (err) => {
    if (err) throw err;
    console.log("Appended to...");
  }
);

//Rename to a File
fs.rename(
  path.join(__dirname, "path_Demo.js"),
  path.join(__dirname, "fs_demo.js"),
  (err) => {
    if (err) throw err;
    console.log("Renamed...");
  }
);

//Read from a File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
