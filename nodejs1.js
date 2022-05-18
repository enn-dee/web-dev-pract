const fs = require("fs");
let text = fs.readFileSync("delt.txt","utf-8");
text = text.replace("text"," simple text written in node.js");


console.log("text from file is: ");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("ende.txt", text);