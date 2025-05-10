let original = {
  name: "Rohit",
  address: {
    city: "Delhi"
  }
};

let shallowCopy = {...original}
shallowCopy.address.city = "channie"
console.log("shallowCopy")
console.log(original)
console.log(shallowCopy);
let convertJson = JSON.stringify(original)
// console.log(convertJson);

let convert = JSON.parse(convertJson)
// console.log(convert)

convert.address.city = "pune";
console.log("deepCopy")

console.log(original)
console.log(convert)

// scond method 

// Deep copy
let copy = structuredClone(original);
// OR
// let copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Mumbai";

console.log(original.address.city); 
console.log(copy.address.city);