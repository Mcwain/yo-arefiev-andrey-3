const num=prompt("enter the number");
    if (isNaN(num)) {
        alert("It's not a number :( Try again.");
        console.log ("need number");
        location.reload()
        }
const degree=prompt("enter the degree");
    if (isNaN(degree)) {
        alert("It's not a number :( Try again.");
        console.log ("need number");
        location.reload()
        }
let result=1;

for (i=1; i<=degree; i++){
result*=num;
}
console.log(result);
