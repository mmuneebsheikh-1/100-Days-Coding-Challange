var myName = "muneeb ashfaq";
var myNameTitle = myName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substring(1); }).join(" ");
console.log(myNameTitle);
