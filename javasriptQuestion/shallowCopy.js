let original = {
  name: "Rohit",
  address: {
    city: "Delhi"
  }
};


let copy = { ...original };
console.log(copy)

// Change nested value
copy.address.city = "Mumbai";
copy.name = "sumit";
console.log(original.name)
console.log(original.address.city); 
let copys = original

copys.name = "pappu";
console.log(copys.name)
console.log(original.name)

let ori = {
  name: "Rohit",
  address: "delhi"
};

let copy = ori
console.log(copy)
copy.name = "pooja"
copy.address = "dwarka"
console.log(ori)
console.log(copy)
