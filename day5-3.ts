let Name: string[] = ["Mr.Hassan", "Mr.Zeeshan late", "Mr.Kamran"];
let newList = Name.slice(0,1).concat(Name.slice(2));
newList.push("Mr.Mubashir");
for (var i = 0; i < newList.length; i++) {
    console.log("".concat(newList[i], " you are invited with family for dinner at our home on upcoming monday at 8pm."));
}