let a = prompt ('enter the number');
if (isNaN(a)){
    alert("It's not a number :( Try again.");
    console.log ("need number");
    window.location.reload()
    }
let b = 1;
while (a > 1){
b = b * a;
a = a - 1;
}
console.log (b);