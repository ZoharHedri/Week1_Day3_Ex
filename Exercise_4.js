// JavaScript source code

/*
Write a JavaScript program which accepts a number as a string
and inserts dashes (-) between each two even numbers (treat zero as an even number).
For example if you accept "025468" the output should be 0-254-6-8
*/

var number = [];
number = prompt("Enter a number");
var Mahrozet="";
for (var i = 0; i < number.length; i++)
{
    if((number[i] % 2 == 0) && (number[i+1] % 2 ==0))
    Mahrozet += number[i] + "-";
    else
    Mahrozet += number[i];
}

console.log(Mahrozet);