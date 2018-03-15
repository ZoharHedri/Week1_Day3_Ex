// JavaScript source code

//Write a simple JavaScript program to join all elements of the following array:
var MyColors = ["Red", "Green", "White", "Black"];
//Into a string like this (including the + symbol in between each color)

var colors = "";

for (var i = 0; i < MyColors.length; i++)
{
    colors = colors + MyColors[i];
    if (i < 3)
    {
        colors += "+";
    }
}
console.log(colors);