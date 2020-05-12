const path = require("path");

//Folder path
console.log(__dirname);

//File path
console.log(__filename);

//Get file extension
console.log(path.extname(__filename));

//Get file's basename
console.log(path.basename(__filename));

//Get folder's basename
console.log(path.basename(__dirname));

//Join paths
console.log(path.join(__dirname, "test2", "index.html"));

//Get object
const pathObject = path.parse(__filename);
console.log(pathObject.root);
console.log(pathObject.dir);
console.log(pathObject.ext);
console.log(pathObject.name);
console.log(pathObject.base);
