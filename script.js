console.log("Hello, World!");

//Strings have quotes & numbers don't//
let myTest="123";
console.log(typeof myTest);

console.log(10 + " eggs");
console.log(10 + 8 + " eggs");
console.log("eggs" + 10 + 8);

//Both conditions need to be true//
console.log(7>3 && 5>2);

//Only one condition must be true//
console.log(10>3||(10>12))

//Logical NOT//
console.log(!5>3)

function introduction(name,age){
    console.log("Hello, my name is " + name + " & I'm " + age + " years old.")
}

introduction("Chance" , 14)

const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting = "Good Morning🌅";
}else if (hour<18){
    greeting = "Good Afternoon⛅"
}else{
    greeting = "Good Evening🌙"
}
document.getElementById("greeting").innerText = greeting