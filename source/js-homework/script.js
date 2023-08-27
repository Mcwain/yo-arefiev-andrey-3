const number = prompt ('enter the number')
    if (isNaN(number)) {
        alert("It's not a number :( Try again.");
        console.log ("need number");
    }
    for (let i = 0; i <=number; i++) {
        if (i % 4 === 0) {
            console.log();    
        }   else {
            console.log(i);
        }
}
