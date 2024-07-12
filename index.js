//Create a button that displays a alert with the message"Button Clicked" when clicked
// This answer is on HTML.
//Create a text input field that logs the entered text to the console whenever the changes.
function strt(){
    var x= this.value;
    console.log(x)
}

//Create an HTML element that changes its background color to blue when the  mouse hovers over it.
 const myBox=document.getElementById("myBox")
 
//  function changeColor(event){
//     event.target.style.backgroundColor= "blue";
//     event.target.textContent="OUCH!😖";
//  }
 myBox.addEventListener("mouseover", event=>{
    event.target.style.background="blue";

 });
//Create a string variable and log its length to the console
 let text="Tanzina"
console.log(text.length)
// Create a string variable and log a specific  character from the  string  to the console.

let text1="Tanzina";
console.log(text1[0])
//Concatenate two strings  and log the result to the console,
let x="20";
let y="30";
console.log("x".concat("","y"));
//Convert a string to uppercase  and log the result to the console.
let text2="Tanzina";
console.log(text2.toUpperCase())
//Trim the whitespace  from the string and log the result to the console.
let text3="       hello world     ";
console.log(text3.trim())
//Replace the word "world" with "everyone" in a string and log the result to the console
let text4="Hello World";
console.log(text4.replace("World","Everyone"));
//Find the position of the first occurrence of the word "world" in a string and log it to the console

let text5="World";
let char= text5.at(0);
console.log(char)
// Extract the word "world" from a string and log it to the console.
let name ="Hello World";
let part= name.slice (5,11);
console.log(part)
//Create a string using template literals that includes  variables for a persons name and age, then log the result to the console.
let fname="Tanzina"
let age= 30;
let text6= `${fname},${age}`
console.log(text6)
// Create a multiline string using template literals and log it to the console.
let text7=`The quick brown fox jumps over the lazy dog `;
console.log(text7)
// Create a string using template that includes a mathematical expression and log the result to the console
let price= 10;
let VAT = 0.35;
let total=`Total: ${(price *(1+VAT).toFixed(2))}`;
console.log(total)
//Create a variable with a number value and log it to the console.
let x1=8;
console.log(x1)
//Create a variable with a floating point number value and log it to the console
let y1=9.78;
console.log(y1)
// Create a string to a number and log the result to the console
 let x2= "100";
 let y2="10";
 console.log(x2/y2)
 //Create a BigInt variable and log it to the console
let y3=BigInt(999999999999999);
console.log(y3)
 //Convert a BigInt to a string and log the result to the console.
let bigNum= BigInt(10123)
console.log(bigNum.toString())
//Perform an addition operation with two BigInt values and log the result to the console.
let x4=907199254740995n;
let y4=907199254740995n;
let z=x4*y4;
console.log(z)
//Round a number to the nearest integer and log the result to the console.
console.log(Math.round(4.2))
//Convert a number to a string and log the result to the console.
let x6=99;
console.log(x6.toString())
//Parse a string to a floating-point number and log the result to the console.
let y5= "10.33";
console.log(parseFloat(y5))
//Log the value of Number.MAX_VALUE to the console
 let y6= new Number(20);
 console.log(Number.MAX_VALUE)

//Log the value of Number.MIN_VALUE to the console.
let y7= new Number(20);
 console.log(Number.MIN_VALUE)
 // Log the value if "Number.NaN" to the console.
 let x7=10;
 let y8="Risa";
 let z8=x7/y8;
 console.log(z8)
