let myName : string = "muneeb ashfaq";
let myNameTitle = myName.split(" ").map((l: string) => l[0].toUpperCase()+l.substring(1)).join(" ")
console.log(myNameTitle);