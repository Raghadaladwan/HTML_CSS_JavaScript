/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

function f(n1,n2)
{
	if(!isNaN(n1)&&!isNaN(n2))
	{
		if (n1>n2)
		 {
		 	return n1;
		 }
		else
		 {
		 	return n2;
		 }
	}
	else
	{
		return ("Not a Number");
	}

} 

  
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
if (num1>=0)
{
	alert("+");
}else if(num1<0)
{
	alert("-");

}else 
{
   alert("Not a Number");
}

 /******* End Your Code ********* */


/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
function f(n1,n2,n3)
{
if (n1>n2 && n1>n3)
{
  
   if(n2>n3)
   {
   	 document.write(n1 +","+n2 +","+n3 );

   }
   else{
   document.write(n1+ ","+n3+ ","+n2 );
  }
}
else if (n2>n1 && n2>n3)
{

   if(n1>n3)
   {
   	 document.write(n2+ ","+n1 +","+n3 );

   }
   else
   {
   document.write(n2 +","+n3+ ","+n1);
    }
    
}
else if (n3>n1 && n3>n2) 
{
   if(n2>n1)
   {
   	 document.write(n3 +","+n2+ ","+n1);

   }
   else
   {
   document.write(n3+ ","+n1+ ","+n2);
    }
}
}

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function fun(n1,n2,n3,n4,n5)
{
if (n1>n2 && n1>n3 && n1>n4 && n1>n5)
{
    alert(n1);
}
else if (n2>n1 && n2>n3 && n2>n4 && n2>n5)
{
    alert(n2);
}
else if (n3>n1 && n3>n2 && n3>n4 && n3>n5)
{
    alert(n3);
}
else if (n4>n1 && n4>n2 && n4>n3 && n4>n5)
{
    alert(n4);
}
else
{
    alert(n5);
}
}

 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

if(x >= y)
{
	console.log("Hello World");
}
else
{
	alert("Goodbye");
}
 /******* End Your Code ********* */


/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/

if(x >= y)
{
	console.log("Hello World");
}
/******* End Your Code ********* */