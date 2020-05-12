const os = require("os");

//Get system platform
console.log(os.platform());

//Get CPU Arch
console.log(os.arch());

//Get CPU Cores
console.log(os.cpus());

//Get free memory
console.log(os.freemem());

//Get total memory
console.log(os.totalmem());

//Get system uptime
console.log(os.uptime());

//Get home directory
console.log(os.homedir());
