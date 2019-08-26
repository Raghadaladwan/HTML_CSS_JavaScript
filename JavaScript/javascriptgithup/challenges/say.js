/*Given a number from 0 to 999,999,999,999, spell out that number in English.
* Instructions:
* Handle the basic case of 0 through 99.
* If the input to the program is 22, then the output should be 'twenty-two'.
* Your program should complain loudly if given a number outside the blessed range.
* Some good test cases for this program are:
0
14
50
98
-1
100
*/
function funNumbers(number)
{

	var numbers1 = ['one','two','three','four','five','six','seven','eight','nine'];
	var numbers2 = ['ten','eleven','twelve','thirteen','fourteen','fiftenn','sixteen','seventeen','eighteen','ninteen'];
	var numbers3=  ['twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninty'];
	var numbers4 = ['handerd','thousand','milion','bilion'];

	// number = 65;
	var result =" ";
	if (number<=9) 
	{
		result+=numbers1[number-1];




	}

	else if(number<20)
	{
		result+= numbers2[(number%10)];

	}

	else if(number<100)
	{
		let a =numbers1[(number%10) - 1];
		let b =numbers3[Math.floor(number / 10) - 2];

		result+=b;
		result+=' ';

		result+=a;
	}

	else if(number<1000)
	{

		let a =numbers1[(number%10) - 1];

	


		let c = numbers4[0];
		

		
	let d;
		
		result+=' ';
		result+=c;

		result+=' ';
		result+=b;
		result+=' ';


				if (((number%10) - 1)<=0) 
		{
			result+=numbers3[Math.floor((number %100)/10)-2];
			 d = numbers1[Math.floor(number / 100)-1];


		}
		else
		{
					
			result+=a;
			result+=d;

		}
		
	}


	


	return result;







   
}