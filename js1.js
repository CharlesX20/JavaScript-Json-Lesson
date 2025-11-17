/*
console.log("Hello World");
console.log('I LOVE PIZZA! ');

let username = window.prompt("What is your name: ");
console.log("Hello" + username);


document.getElementById("p1").innerHTML = "Hello";
*/

let count=0;

document.getElementById("decreaseBtn").onclick = function()
{
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function()
{
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function()
{
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}