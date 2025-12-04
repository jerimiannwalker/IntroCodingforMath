var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "basic-operations",
  "level": "1",
  "url": "basic-operations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Operations with Python",
  "body": " Basic Operations with Python  In this section, we will be learning about things like adding and subtracting in python. You will see \"variables\" or things that can take on any value. In python, you set the value of a variable with an equals sign. You can change the value by resetting it. This will make more sense once you run the code examples below.   Addition, Subtraction, Multiplication, and Division  Python will do basic math operations like addition, subtraction, multiplication and division. In the following example we create a variable x, set its value to be 1, and then change its value using various operations. Comments in code start with a \"#\" and are ignored when the code is run. This allows us to let others know what we are doing.  Run the following code. The print command will tell you the value of x after all the operations. Try to figure out what x will be before running the code!     x = 1 #set the value of x to 1 x = x + 1 #add 1 to x x = x*2 #multiply x by 2 x = x - 5 #subtract 5 from x print(x) #print x       Notice that we did not divide. There are two ways to divide in python. For now, we will concern ourselves with standard division. But if we take an integer and divide, a \"float\" or decimal number will be returned. This is not important now, but will be later.     x = 4 #set the value of x to 4 x = x\/2 #divide x by 2 - will return a float print(x) #print x         Powers and Roots  You may be used to typing an exponent as something like 4^2 = 16. In python, we write this as 4**2.     x = 4 x = x**2 #square x print(x)     Recall from mathematics that roots can be represented by powers.   One way to find roots then would be to take to fractional exponents. This is not the only way though. Another way is to use a library, which is something we explore later. For now, if we need to find a root, we will use an exponent as below.     x = 81 x = x**(1\/2) #take the square root of x, or x to the 1\/2 power print(x)       Once again, a float is returned. For numbers that are not perfect squares, we might not want all the decimal places python will show us. We can use the round() function to get the number of decimal places we would like to see. To do this, we have to actually change x. That is why we have \"x =\" before the round() function.     x = 11 x = x**(1\/2) print(x) x = round(x,2) #round to 2 decimal places print(x) #print x again to see the change         In this section, you learned about operations on numbers, but you also learned about working with variables, floats (decimals) vs integers, and the round() function. The exercises after each section will help you practice the material presented. If you have not installed python on your machine, you can write this code from any computer connected to the internet using google colab: https:\/\/colab.research.google.com\/.     Set a variable called \"number\" equal to 5. Add 10 to \"number\", multiply \"number\" by 5, and subtract 7. Finally, print number. What is the value of number?   Remember at each stage, you must reassign the value to number. This is done with the equals sign. Finally, print() will print the variable you pass to it. NOtice that the operations do not have to be on one line. Python will follow order of operations, so you can multiply by 5 and subtract 7 on the same line.  number = 5 number = number + 10 number = 5*number - 7 print(number)        Find the value of:     Since python follows order of operations, you can set a variable equal to the expression and print. There needs to be a * in front of the parentheses to represent the multiplication.  x = 3*(1+4)**6 - 15 print(x)        Find one solution to and round to two decimal places.    The quadratic formula will be helpful.    The quadratic formula is: where is the coefficient of , is the coefficient of , and is the constant. You can just use \"+\" from \" \" to get one root.    Using the quadratic formula, we can find one root. While you could type it all in one line, it is easier to break up into two parts. For the negative in the formula, you must multiply by .  x = -1*(-1) + ((-1)**2-4*2*5) #top of fraction x = x\/(2*2) x = round(x,2) print(x)       "
},
{
  "id": "basic-operations-6-1",
  "level": "2",
  "url": "basic-operations.html#basic-operations-6-1",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "",
  "body": " Set a variable called \"number\" equal to 5. Add 10 to \"number\", multiply \"number\" by 5, and subtract 7. Finally, print number. What is the value of number?   Remember at each stage, you must reassign the value to number. This is done with the equals sign. Finally, print() will print the variable you pass to it. NOtice that the operations do not have to be on one line. Python will follow order of operations, so you can multiply by 5 and subtract 7 on the same line.  number = 5 number = number + 10 number = 5*number - 7 print(number)     "
},
{
  "id": "basic-operations-6-2",
  "level": "2",
  "url": "basic-operations.html#basic-operations-6-2",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "",
  "body": "  Find the value of:     Since python follows order of operations, you can set a variable equal to the expression and print. There needs to be a * in front of the parentheses to represent the multiplication.  x = 3*(1+4)**6 - 15 print(x)     "
},
{
  "id": "basic-operations-6-3",
  "level": "2",
  "url": "basic-operations.html#basic-operations-6-3",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "",
  "body": "  Find one solution to and round to two decimal places.    The quadratic formula will be helpful.    The quadratic formula is: where is the coefficient of , is the coefficient of , and is the constant. You can just use \"+\" from \" \" to get one root.    Using the quadratic formula, we can find one root. While you could type it all in one line, it is easier to break up into two parts. For the negative in the formula, you must multiply by .  x = -1*(-1) + ((-1)**2-4*2*5) #top of fraction x = x\/(2*2) x = round(x,2) print(x)     "
},
{
  "id": "if-statements",
  "level": "1",
  "url": "if-statements.html",
  "type": "Section",
  "number": "1.2",
  "title": "If Statements",
  "body": " If Statements   One of the most basic things in programming is the if statement. This is a block of code that runs \"if\" something is true. This could be a mathematical statement like \"if x is bigger than 5\" or it would be something like \"if the list contains apples.\" If the condition is false, the code simply doesn't run. We will learn how to use if statements in this section.    Checking Equality  So far, we have been using the equals sign (=) to set a variable to a value. But, to check if two things are equal in python, we use a double equals sign (==). This is common in many programming languages.  Below, we set the value of x to be 5. Then we check if x is equal to 5. If it is, we add 1 to x. Finally, we print the value of x. Python uses indentation to show what code is inside the if statement. The line that is indented after the if statement is the only line that will run if the condition is true.    x = 5 if x == 5: #check if x is equal to 5 x = x + 1 #if so, add 1 to x print(x)    What if instead we checked if x was equal to 7? Let's adjust the code and see what happens.    x = 5 if x == 7: #check if x is equal to 7 x = x + 1 #if so, add 1 to x print(x)    This time, the statement we were checking was false, so the code indented after the if statement did not run. The values of x is still 5. We did not add 1 to it.    Checking Inequality  It is also possible to check if two things are not equal. This is done with the \"not equal\" operator (!=). Let's check if x is not equal to 7, and then add 1 if that is the case.    x = 5 if x != 7: #check if x is not equal to 7 x = x + 1 #if so, add 1 to x print(x)    Since x is not 7, the code ran and added 1 to x. The value of x is now 6.  When you read inequality, you probably thought about \"greater than\" or \"less than or equal.\" Those are also possible in if statements. The symbols you would use are:  Greater than: >  Less than: <  Greater than or equal to: >=  Less than or equal to: <=    In the code below, we check if x is less than or equal to 10. If it is, we multiply x by 2.    x = 3 if x <=10: #check if x is less than or equal to 10 x = x*2 #if so, multiply x by 2 print(x)    If x were 15, the code above would not have multiplied x by 2, and the value of x would have stayed 15.    Else Statements    x = 2 if x > 5: #check if x is greater than 5 x = x + 10 #if so, add 10 to x else: x = x * 4 #if not, multiply x by 4 print(x)    Since x is not greater than 5, the if condition is false, and we do not add 10 to x. But, since if was false, the else statement runs, and x is multiplied by 4. The value of x is now 8.      Set a variable n equal to 20. Check if n is less than 100, and if it is, add 50 to n. Finally, print n. What is the value of n?    The value of n is 70 because 20 is less than 100, so we added 50 to it.   n = 20 if n < 100: n = n + 50 print(n)       Set a variable k equal to 95. Check if k is greater than or equal to 100. If it is, subtract 20 from k. Otherwise, subtract 5 from k. Finally, print k. What is the value of k?    You will need to use an else statement.     k = 95 if k >= 100: k = k - 20 else: k = k - 5 print(k)   The value of k is 90 because 95 is not greater than or equal to 100, so the if statement does not run. Instead, the else statement is applied. So, 5 is subtracted from k.      Set a variable equal to 6, check if it is less than 12, and if it is, take it to the power of 3. What is the value of your variable?    You will need to name your variable first.    Remember that to take something to a power in python, you use **.    We will call our variable a. You could name it something else if you want. a = 6 if a < 12: a = a ** 3 print(a)      "
},
{
  "id": "exercises-if-statements-1",
  "level": "2",
  "url": "if-statements.html#exercises-if-statements-1",
  "type": "Exercise",
  "number": "1.2.4.1",
  "title": "",
  "body": "  Set a variable n equal to 20. Check if n is less than 100, and if it is, add 50 to n. Finally, print n. What is the value of n?    The value of n is 70 because 20 is less than 100, so we added 50 to it.   n = 20 if n < 100: n = n + 50 print(n)    "
},
{
  "id": "exercises-if-statements-2",
  "level": "2",
  "url": "if-statements.html#exercises-if-statements-2",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "",
  "body": "  Set a variable k equal to 95. Check if k is greater than or equal to 100. If it is, subtract 20 from k. Otherwise, subtract 5 from k. Finally, print k. What is the value of k?    You will need to use an else statement.     k = 95 if k >= 100: k = k - 20 else: k = k - 5 print(k)   The value of k is 90 because 95 is not greater than or equal to 100, so the if statement does not run. Instead, the else statement is applied. So, 5 is subtracted from k.   "
},
{
  "id": "exercises-if-statements-3",
  "level": "2",
  "url": "if-statements.html#exercises-if-statements-3",
  "type": "Exercise",
  "number": "1.2.4.3",
  "title": "",
  "body": "  Set a variable equal to 6, check if it is less than 12, and if it is, take it to the power of 3. What is the value of your variable?    You will need to name your variable first.    Remember that to take something to a power in python, you use **.    We will call our variable a. You could name it something else if you want. a = 6 if a < 12: a = a ** 3 print(a)    "
},
{
  "id": "while-loops",
  "level": "1",
  "url": "while-loops.html",
  "type": "Section",
  "number": "2.1",
  "title": "While Loops",
  "body": " While Loops   A while loop runs \"while\" something is true. As long as the condition is true, it will keep repeating the code. This can be dangerous though! If the rule is never false, the loop will never end. We must be careful to make sure that our rule will eventually be false.    Example of a While Loop  Let's look at an example of a while loop. In this example, we will start with a variable set to 1, and we will keep doubling it while it is less than 100.    x = 1 while x < 100: #while x is less than 100 x = x * 2 #double the value of x print(x)    In this code, the value of x is first set to be 1. Then, the while loop checks to see if x is less than 100. Since it is, it multiplies x by 2, and the value of x is 2. Then, the while loop checks again to see if x is less than 100. It is, so it doubles x again, and x is now 4. This continues to where x is 8, 16, 32, 64, and then finally 128. Then, when the while loop checks to see if x is less than 100, it finds that it is not, so it stops. It then prints the value of x, which is 128.      Write a while loop that starts with a variable set to 3, and keeps adding 3 to it while it is less than 50. Print the final value of the variable.    We will use \"x\" for our variable name. First, we set it equal to 3. Then, a while loop checks if the value is less than 50. If it is, 3 is added to x. Then, outside of the while loop, we print the value of x. This print happens after the while loop is done.    x = 3 while x < 50: #while x is less than 50 x = x + 3 #add 3 to the value of x print(x)       "
},
{
  "id": "while-loops-4-1",
  "level": "2",
  "url": "while-loops.html#while-loops-4-1",
  "type": "Exercise",
  "number": "2.1.2.1",
  "title": "",
  "body": "  Write a while loop that starts with a variable set to 3, and keeps adding 3 to it while it is less than 50. Print the final value of the variable.    We will use \"x\" for our variable name. First, we set it equal to 3. Then, a while loop checks if the value is less than 50. If it is, 3 is added to x. Then, outside of the while loop, we print the value of x. This print happens after the while loop is done.    x = 3 while x < 50: #while x is less than 50 x = x + 3 #add 3 to the value of x print(x)     "
},
{
  "id": "for-loops",
  "level": "1",
  "url": "for-loops.html",
  "type": "Section",
  "number": "2.2",
  "title": "For Loops",
  "body": " For Loops   For loops repeat a block of code a set number of times. This is useful when we know ahead of time how many times we want to repeat something. For loops are often used with lists and ranges.    Lists  A list is a collection of thing, in a specific order. In python, we can create lists using square brackets, with commas between each item in the list. The following are each lists.     myList = [2,4,6,8,10]        people = [Abdul, Maria, Joseph]     For loops allow us to go through each item in a list, one at a time. One way to do this is to name the elements of the list and use the word \"in.\"    myList = [2,4,6,8,10] for number in myList: #for every number in the list myList print(number) #print the number    This code runs through each item in \"myList\" and prints it one at a time. This is different than printing the whole list at once. As you can see below, just printing \"myList\" gives the entire list as one output.    myList = [2,4,6,8,10] print(myList) #print the whole list at once      Ranges  The range function in python creates a list of numbers, in order, starting from 0 and going up to one less than the number you give it. For example, the code below creates a list of numbers from 0 up to 9. Notice we have to add a \"list\" function around the range function.    myRange = list(range(10)) #create a list from 0 to 9 print(myRange) #print the list    You can start a range from any value by giving it two numbers. The first number is where the list will start, and the second number is where it will stop - remembering it will stop one before that number.    myRange = list(range(5,15)) #create a list from 5 to 14 print(myRange) #print the list    Ranges combined with for loops allow us to repeat a block of code a set number of times. Imagine if we wanted to take a variable \"number,\" and add 5 to it ten times. We can do this using a range with a for loop. Since we are not making a list, we do not need to use the list function.    number = 0 for i in range(10): #repeat the following block 10 times number = number + 5 #add 5 to number print(number)    The variable i is a placeholder that takes on each value in the range as the loop runs. However, since we are not using i in the code block, it does not affect the outcome. After running this code, the value of number is 50, since we added 5 to it ten times. Even though the range stops at 9, the loop still runs ten times, since it starts counting from 0.  We would get the same result writing \"range(0,10)\" or \"range(1,11).\" In the first case, the value of i would go from 0 to 9, and in the second case, it would go from 1 to 10. But in both cases, the loop runs ten times.  What is useful about having a placeholder like i is that we can use it within the code block. This is even more useful, as we can refer to items in a list by their index. The index is the location of an element in the list. It starts at 0 for the first item. For example, in the list [2,4,6,8,10], the index of 2 is 0, the index of 4 is 1, the index of 6 is 2, and so on.  To refer to an item in a list this way, we write the name of the list, followed by square brackets with the index inside. The notation \"myList[2]\" represents the element of myList with index 2. Remembering the index starts at zero, that would be 6.    myList = [2,4,6,8,10] print(myList[2]) #print the item in myList with index 2    This indexing is useful when combined with for loops and ranges. If we wanted to add 5 to each element in a list, we could use this indexing method. The code below does this.    myList = [2,4,6,8,10] for i in range(5): #repeat the following block 5 times myList[i] = myList[i] + 5 #add 5 to the item in myList with index i print(myList)    This code starts at myList[0] and then adds 5 to it. Then, it goes ot myList[1] and adds 5 to it, and so on, until it has added 5 to each item in the list.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
