const url = require("url");

//create new URL object
const newUrl = new URL("http://mydomain.com:5000/test?id=1&name=Kunal");

//Get url
console.log(newUrl.href);
//same as above
console.log(newUrl.toString());

//Get host
console.log(newUrl.host);

//Get hostname(doesn't include port name)
console.log(newUrl.hostname);

//Get params
console.log(newUrl.search);

//Get params(creates object)
console.log(newUrl.searchParams);

//Get port
console.log(newUrl.port);

//Get protocol
console.log(newUrl.protocol);
