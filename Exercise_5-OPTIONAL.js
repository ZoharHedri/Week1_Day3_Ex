// JavaScript source code

//With a partner, write a JavaScript program to find the most frequently occuring item
// of an array.
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var counter1 =0 ,counter2 = 0;
var frequently;
var temp = 0;
for (var i = 0; i < array.length; i++)
{
    frequently = array[i];
    counter1 = 1
    for(var j = 1; j < array.length; j++)
    {
        if(array[i] == array[j])
        {
            counter1++;
        }
    }

    if(counter2 < counter1)
    {
        counter2 = counter1; 
        temp = frequently;
    }
}

console.log(temp);