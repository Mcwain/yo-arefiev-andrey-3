function addCreator(a) {    
    return function addCreator(b) {
    if(typeof a === "number" && typeof b === "number") {            
        return a + b;
    } };
}

let add = addCreator(5);

console.log(add(5)); // 10

console.log(addCreator(1)(3)); // 4