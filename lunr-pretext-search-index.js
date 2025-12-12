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
  "body": " For Loops   For loops repeat a block of code a set number of times. This is useful when we know ahead of time how many times we want to repeat something. For loops are often used with lists and ranges.    Lists  A list is a collection of thing, in a specific order. In python, we can create lists using square brackets, with commas between each item in the list. The following are each lists.     myList = [2,4,6,8,10]        people = [Abdul, Maria, Joseph]     For loops allow us to go through each item in a list, one at a time. One way to do this is to name the elements of the list and use the word \"in.\"    myList = [2,4,6,8,10] for number in myList: #for every number in the list myList print(number) #print the number    This code runs through each item in \"myList\" and prints it one at a time. This is different than printing the whole list at once. As you can see below, just printing \"myList\" gives the entire list as one output.    myList = [2,4,6,8,10] print(myList) #print the whole list at once      Ranges  The range function in python creates a list of numbers, in order, starting from 0 and going up to one less than the number you give it. For example, the code below creates a list of numbers from 0 up to 9. Notice we have to add a \"list\" function around the range function.    myRange = list(range(10)) #create a list from 0 to 9 print(myRange) #print the list    You can start a range from any value by giving it two numbers. The first number is where the list will start, and the second number is where it will stop - remembering it will stop one before that number.    myRange = list(range(5,15)) #create a list from 5 to 14 print(myRange) #print the list    Ranges combined with for loops allow us to repeat a block of code a set number of times. Imagine if we wanted to take a variable \"number,\" and add 5 to it ten times. We can do this using a range with a for loop. Since we are not making a list, we do not need to use the list function.    number = 0 for i in range(10): #repeat the following block 10 times number = number + 5 #add 5 to number print(number)    The variable i is a placeholder that takes on each value in the range as the loop runs. However, since we are not using i in the code block, it does not affect the outcome. After running this code, the value of number is 50, since we added 5 to it ten times. Even though the range stops at 9, the loop still runs ten times, since it starts counting from 0.  We would get the same result writing \"range(0,10)\" or \"range(1,11).\" In the first case, the value of i would go from 0 to 9, and in the second case, it would go from 1 to 10. But in both cases, the loop runs ten times.  What is useful about having a placeholder like i is that we can use it within the code block. This is even more useful, as we can refer to items in a list by their index. The index is the location of an element in the list. It starts at 0 for the first item. For example, in the list [2,4,6,8,10], the index of 2 is 0, the index of 4 is 1, the index of 6 is 2, and so on.  To refer to an item in a list this way, we write the name of the list, followed by square brackets with the index inside. The notation \"myList[2]\" represents the element of myList with index 2. Remembering the index starts at zero, that would be 6.    myList = [2,4,6,8,10] print(myList[2]) #print the item in myList with index 2    This indexing is useful when combined with for loops and ranges. If we wanted to add 5 to each element in a list, we could use this indexing method. The code below does this.    myList = [2,4,6,8,10] for i in range(5): #repeat the following block 5 times myList[i] = myList[i] + 5 #add 5 to the item in myList with index i print(myList)    This code starts at myList[0] and then adds 5 to it. Then, it goes ot myList[1] and adds 5 to it, and so on, until it has added 5 to each item in the list.    Counting by More than One  The range() function can take a third number like range(0,10,2). This third number tells the range what to count by. So this code would start at 0 an count by 2 up to 8 - remember the last number is not included!    myList = list(range(0,10,2)) #create a list from range print(myList) #prints [0,2,4,6,8]      Exercises    Write a for loop that prints the numbers from 1 to 10.    You could, but don't need to, create a list here. You could use the range() function instead and print \"as you go.\" Your range should start at 1 and go up to 11, since the last number is not included.  for i in range(1,11): print(i)        Write a for loop that adds 3 to each element in the list [1,2,3,4,5] and prints the new list.    First, create the list. You can name it anything you like. Here, I call it simply \"theList.\"  theList = [1,2,3,4,5]  Now, create a for loop that goes through each item in the list. This is where you want to use the indexing method. There are 5 items in the list, so you want to repeat the code block 5 times. You can do this using range(5).  for i in range(5): theList[i] = theList[i] + 3  Finally, print the new list.  print(theList)  All together, the code looks like this:  theList = [1,2,3,4,5] for i in range(5): theList[i] = theList[i] + 3 print(theList)        Write a for loop that prints the even numbers from 0 to 20.    You do not need to create a list. You can use the range() function directly.    Count by 2 in the range list.    Using the range() function, you can create a for loop that prints every other number from 0 to 20.  for i in range(0,21,2): print(i)  Notice that we go up to 21. The range function stops one before the last number, so to include 20, we have to go one higher.     "
},
{
  "id": "exercise-1-for-loops",
  "level": "2",
  "url": "for-loops.html#exercise-1-for-loops",
  "type": "Exercise",
  "number": "2.2.4.1",
  "title": "",
  "body": "  Write a for loop that prints the numbers from 1 to 10.    You could, but don't need to, create a list here. You could use the range() function instead and print \"as you go.\" Your range should start at 1 and go up to 11, since the last number is not included.  for i in range(1,11): print(i)     "
},
{
  "id": "exercise-2-for-loops",
  "level": "2",
  "url": "for-loops.html#exercise-2-for-loops",
  "type": "Exercise",
  "number": "2.2.4.2",
  "title": "",
  "body": "  Write a for loop that adds 3 to each element in the list [1,2,3,4,5] and prints the new list.    First, create the list. You can name it anything you like. Here, I call it simply \"theList.\"  theList = [1,2,3,4,5]  Now, create a for loop that goes through each item in the list. This is where you want to use the indexing method. There are 5 items in the list, so you want to repeat the code block 5 times. You can do this using range(5).  for i in range(5): theList[i] = theList[i] + 3  Finally, print the new list.  print(theList)  All together, the code looks like this:  theList = [1,2,3,4,5] for i in range(5): theList[i] = theList[i] + 3 print(theList)     "
},
{
  "id": "exercise-3-for-loops",
  "level": "2",
  "url": "for-loops.html#exercise-3-for-loops",
  "type": "Exercise",
  "number": "2.2.4.3",
  "title": "",
  "body": "  Write a for loop that prints the even numbers from 0 to 20.    You do not need to create a list. You can use the range() function directly.    Count by 2 in the range list.    Using the range() function, you can create a for loop that prints every other number from 0 to 20.  for i in range(0,21,2): print(i)  Notice that we go up to 21. The range function stops one before the last number, so to include 20, we have to go one higher.   "
},
{
  "id": "more-on-lists",
  "level": "1",
  "url": "more-on-lists.html",
  "type": "Section",
  "number": "2.3",
  "title": "More on Lists",
  "body": " More on Lists   Lists come up a lot in mathematical programming. There is still a little more we will need to know about them before we can use them effectively. In this section, we will look at using the length of a list, adding to a list, and creating lists.    Length of a List  The function len() gives the length of a list, which is how many elements the list contains. You may recall that we would look at how many items were in a list in order to determine how long to make a for loop run. Instead you can use len() to determine the stopping point of a loop. The code below shows you the basic concept of the function len().    myList = [2,4,6,8,10] print(len(myList)) #prints 5 because there are 5 items in myList    Now consider what we were talking about: doing something with a list using a for loop and the lists length. Let's take each element of a list, divide it by 3, round the result to two decimal places, and print it.    theList = [100,20,1,5,33] for i in range(len(theList)): #for every index in the list result = round(theList[i] \/ 3, 2) #divide the element at that index by 3 and round it print(result) #print the result    We could have used range(5) instead of range(len(theList)) since we know the list has 5 elements. However, using len() makes our code more flexible. If we later change the list to have more or fewer elements, we won't have to change the for loop. Think about this: we might not even be sure about the length of a list when we write the code. That may seem strange, but we could have very large lists or lists that change depending on some other aspect of the code. The len() function allows us to write code that will still \"hit\" every element of the list we want.    Adding Elements to a List  The append() function allows us to add elements to the end of a list. This is useful when we want to build a list as we go, rather than creating it all at once. Let's look at a simple example to see how this works.    theList = [1,2] theList.append(3) #adds 3 to the end of theList theList.append(4) #adds 4 to the end of theList print(theList) #prints [1,2,3,4]    Notice that we needed a list to start with in order to use append(). We will not always know what is in the list ahead of time. This comes up when you are building a list based on some calculations or other code. In order to append the elements to the list, we will need to first create an empty list. This is written as \"myList = [].\"    myList = [] #create an empty list for i in range(5): #for every number from 0 to 4 myList.append(i) #add that number to the end of myList print(myList) #prints [0,1,2,3,4]    Something that will come up later is a list of lists. This is when each element of a list is itself a list. When we work with matrices, we will use a list of lists to represent the rows and columns.      Create a list of three states that start with the letter \"A\" using the append() function. Print your list.    This does not require a for loop. You can start with an empty list and append.  states = [] states.append(\"Alabama\") states.append(\"Alaska\") states.append(\"Arizona\") print(states)        Create a list of the first 10 multiples of 4 using a for loop and the append() function. Print your list.    Do not just type out the multiples of 4. Calculate them using a for loop that goes from 1 to 10 and multiplies each number by 4.    First, create an empty list. Then, create a for loop that goes from 1 to 10. Inside the loop, calculate the multiple of 4 and append it to the list.  multiplesOf4 = [] for i in range(1,11): multiplesOf4.append(i * 4) print(multiplesOf4) #prints [4,8,12,16,20,24,28,32,36,40]    Notice that you can do the calculation inside of the append() function. This makes it so no extra variables are needed.      Create a list of the cubes of the first 5 even numbers (2,4,6,8,10) using a for loop and the append() function. Print your list.    You can use range() to get the first 5 even numbers by multiplying each number in the range by 2. Then, cube that result and append it to the list.    You may want to use a variable here to hold the even number before cubing it and appending it to the list. This would be in the for loop. Something like: even = 2 * i.    First, create an empty list. Then, create a for loop that goes from 1 to 5. Inside the loop, calculate the even number, cube it, and append it to the list.  cubesOfEvens = [] for i in range(1,6): even = 2 * i cubesOfEvens.append(even ** 3) print(cubesOfEvens) #prints [8,64,216,512,1000]       "
},
{
  "id": "exercise-1-more-on-lists",
  "level": "2",
  "url": "more-on-lists.html#exercise-1-more-on-lists",
  "type": "Exercise",
  "number": "2.3.3.1",
  "title": "",
  "body": "  Create a list of three states that start with the letter \"A\" using the append() function. Print your list.    This does not require a for loop. You can start with an empty list and append.  states = [] states.append(\"Alabama\") states.append(\"Alaska\") states.append(\"Arizona\") print(states)     "
},
{
  "id": "exercise-2-more-on-lists",
  "level": "2",
  "url": "more-on-lists.html#exercise-2-more-on-lists",
  "type": "Exercise",
  "number": "2.3.3.2",
  "title": "",
  "body": "  Create a list of the first 10 multiples of 4 using a for loop and the append() function. Print your list.    Do not just type out the multiples of 4. Calculate them using a for loop that goes from 1 to 10 and multiplies each number by 4.    First, create an empty list. Then, create a for loop that goes from 1 to 10. Inside the loop, calculate the multiple of 4 and append it to the list.  multiplesOf4 = [] for i in range(1,11): multiplesOf4.append(i * 4) print(multiplesOf4) #prints [4,8,12,16,20,24,28,32,36,40]    Notice that you can do the calculation inside of the append() function. This makes it so no extra variables are needed.   "
},
{
  "id": "exercise-3-more-on-lists",
  "level": "2",
  "url": "more-on-lists.html#exercise-3-more-on-lists",
  "type": "Exercise",
  "number": "2.3.3.3",
  "title": "",
  "body": "  Create a list of the cubes of the first 5 even numbers (2,4,6,8,10) using a for loop and the append() function. Print your list.    You can use range() to get the first 5 even numbers by multiplying each number in the range by 2. Then, cube that result and append it to the list.    You may want to use a variable here to hold the even number before cubing it and appending it to the list. This would be in the for loop. Something like: even = 2 * i.    First, create an empty list. Then, create a for loop that goes from 1 to 5. Inside the loop, calculate the even number, cube it, and append it to the list.  cubesOfEvens = [] for i in range(1,6): even = 2 * i cubesOfEvens.append(even ** 3) print(cubesOfEvens) #prints [8,64,216,512,1000]     "
},
{
  "id": "mini-project-1",
  "level": "1",
  "url": "mini-project-1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Mini Project 1",
  "body": " Mini Project 1   In this mini project, you will count the number of \"5\"'s in a list of numbers. Searching a list is a common task in programming, and counting how many times something appears is a good way to practice this skill. But, do know that there are all kinds of algorithms (step by step procedures) that can do this faster. In fact, searching algorithms is an entire area of computer science!  Be sure to keep all your code in one document and comment your code well so you can understand what you did when you come back to it later.     The list of numbers you will be searching is given below. You can copy and paste this list into your code to get started.  numbers = [3, 5, 2, 8, 5, 1, 5, 7, 9, 5, 4, 6, 5, 0, 5]  In order to count, you will need to set up a variable to keep track. You will want to start this variable at 0 since you haven't found any \"5\"'s yet. Then, you will need to loop through each number in the list and check if it is equal to 5. If it is, you will want to add 1 to your counting variable. Finally, after you have checked all the numbers in the list, you will want to print out the value of your counting variable.    For all of these mini projects, there are many ways to solve the problem. You may use different variable names, a different style with your loops, or other small things. Before changing all your code to match this solution, check first if you got the correct count! If you did, great job! If not, try to debug your code first. If you are still stuck, then you can look at this solution for help.  The correct count is 6. Here is one way to write the code to get that answer:    numbers = [3, 5, 2, 8, 5, 1, 5, 7, 9, 5, 4, 6, 5, 0, 5] count = 0 #start counting at 0 outside the loop for number in numbers: if number == 5: #check if the number is equal to 5 count = count + 1 #if so, add 1 to the count print(count) #print the final count after the loop      "
},
{
  "id": "mini-project-1-3",
  "level": "2",
  "url": "mini-project-1.html#mini-project-1-3",
  "type": "Checkpoint",
  "number": "3.1.1",
  "title": "",
  "body": "  The list of numbers you will be searching is given below. You can copy and paste this list into your code to get started.  numbers = [3, 5, 2, 8, 5, 1, 5, 7, 9, 5, 4, 6, 5, 0, 5]  In order to count, you will need to set up a variable to keep track. You will want to start this variable at 0 since you haven't found any \"5\"'s yet. Then, you will need to loop through each number in the list and check if it is equal to 5. If it is, you will want to add 1 to your counting variable. Finally, after you have checked all the numbers in the list, you will want to print out the value of your counting variable.    For all of these mini projects, there are many ways to solve the problem. You may use different variable names, a different style with your loops, or other small things. Before changing all your code to match this solution, check first if you got the correct count! If you did, great job! If not, try to debug your code first. If you are still stuck, then you can look at this solution for help.  The correct count is 6. Here is one way to write the code to get that answer:    numbers = [3, 5, 2, 8, 5, 1, 5, 7, 9, 5, 4, 6, 5, 0, 5] count = 0 #start counting at 0 outside the loop for number in numbers: if number == 5: #check if the number is equal to 5 count = count + 1 #if so, add 1 to the count print(count) #print the final count after the loop     "
},
{
  "id": "mini-project-2",
  "level": "1",
  "url": "mini-project-2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Mini Project 2",
  "body": " Mini Project 2   For this mini project, you will be finding all perfect cubes of numbers in a list. You will then create a new list of only these perfect cubes. A perfect cube is a number that can be expressed as the cube of an integer. For example, 27 is a perfect cube because it can be expressed as 3^3 (3 * 3 * 3 = 27). On the other hand, 20 is not a perfect cube because there is no integer that can be cubed to get 20.     The list of numbers you will be working with is below. You can copy and paste this list into your code to get started.  numbers = [8, 81, 10, 27, 64, 15, 125, 7, 216, 5, 343, 12]  Remember that you will need to create a new list. Do that first. Afterwards, you will need to loop through each number if the list and check if it is a perfect cube. One way to check for a perfect cube is to check if the cube root of the number is an integer (whole number or zero). But, there are some weird things that go on with floating point numbers in python. If I ask if 4.999999 is an integer, python will say no, even though it is really close to 5. This could be because the answer really is 4.999999 or due to rounding errors.  So while there is a way to check if a float (remember: decimal) is really an integer, it is not always accurate. Instead, try taking the cube root, rounding it, and seeing if it cubed gives you back the original number. If it does, then the number is a perfect cube.    The correct list of perfect cubes is [8, 27, 64, 125, 216, 343]. Here is one way to write the code to get that answer:    numbers = [8, 81, 10, 27, 64, 15, 125, 7, 216, 5, 343, 12] perfectCubes = [] #create an empty list to store perfect cubes for number in numbers: cubeRoot = round(number ** (1\/3)) #calculate the cube root and round to whole number if cubeRoot**3 == number: #check if the cubing gives you back the original number perfectCubes.append(number) #if so, add the number to the perfectCubes list print(perfectCubes) #print the list of perfect cubes    This may seem like a round about way to get the perfect cubes, but it avoids the issues with floating point numbers in python. We will find ourselves working with the rounding errors of floating point numbers a lot, and we will see many different approaches to dealing with them.    "
},
{
  "id": "mini-project-2-3",
  "level": "2",
  "url": "mini-project-2.html#mini-project-2-3",
  "type": "Checkpoint",
  "number": "3.2.1",
  "title": "",
  "body": "  The list of numbers you will be working with is below. You can copy and paste this list into your code to get started.  numbers = [8, 81, 10, 27, 64, 15, 125, 7, 216, 5, 343, 12]  Remember that you will need to create a new list. Do that first. Afterwards, you will need to loop through each number if the list and check if it is a perfect cube. One way to check for a perfect cube is to check if the cube root of the number is an integer (whole number or zero). But, there are some weird things that go on with floating point numbers in python. If I ask if 4.999999 is an integer, python will say no, even though it is really close to 5. This could be because the answer really is 4.999999 or due to rounding errors.  So while there is a way to check if a float (remember: decimal) is really an integer, it is not always accurate. Instead, try taking the cube root, rounding it, and seeing if it cubed gives you back the original number. If it does, then the number is a perfect cube.    The correct list of perfect cubes is [8, 27, 64, 125, 216, 343]. Here is one way to write the code to get that answer:    numbers = [8, 81, 10, 27, 64, 15, 125, 7, 216, 5, 343, 12] perfectCubes = [] #create an empty list to store perfect cubes for number in numbers: cubeRoot = round(number ** (1\/3)) #calculate the cube root and round to whole number if cubeRoot**3 == number: #check if the cubing gives you back the original number perfectCubes.append(number) #if so, add the number to the perfectCubes list print(perfectCubes) #print the list of perfect cubes    This may seem like a round about way to get the perfect cubes, but it avoids the issues with floating point numbers in python. We will find ourselves working with the rounding errors of floating point numbers a lot, and we will see many different approaches to dealing with them.   "
},
{
  "id": "mini-project-3",
  "level": "1",
  "url": "mini-project-3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Mini Project 3",
  "body": " Mini Project 3   Here, you will create a list of numbers 0,50 and then create two new lists: one of the even numbers and one of the odd numbers. This will give you practice in creating lists, but also it will give you practice in using the \"modulus\" operator (%). The modulus operator gives the remainder when one number is divided by another. For example, 7 % 2 is 1 because when you divide 7 by 2, the remainder is 1. On the other hand, 8 % 2 is 0 because when you divide 8 by 2, there is no remainder. You can use this operator to check if a number is even or odd. If a number % 2 is 0, then the number is even. If a number % 2 is 1, then the number is odd.     You will be using lists and the modulus operator. The modulus operator works as below:  #check if even myList = [1,2] for number in myList: if number % 2 == 0: print(number, \"is even.\") #prints the number if it is even    This time, you will need to create two new lists. One for evens and one for odds. These are the two lists you will print out at the end.  First create the list of numbers from 0 to 50. Then, create two empty lists to store the even and odd numbers. Next, loop through each number in the list of numbers. Use an if statement to check if the number is even or odd using the modulus operator. If the number is even, add it to the even numbers list. If the number is odd, add it to the odd numbers list. Finally, print out both lists.    An else statement is helpful here since a number is either even or odd. So, you can use two if statements - one for even and one for odd - or you can use the else statement after checking for even.    numbers = list(range(51)) #create a list of numbers from 0 to 50 evenNumbers = [] #create an empty list for even numbers oddNumbers = [] #create an empty list for odd numbers for number in numbers: if number % 2 == 0: #check if the number is even evenNumbers.append(number) #add to even numbers list else: oddNumbers.append(number) #add to odd numbers list print(\"Even Numbers:\", evenNumbers) #print the list of even numbers print(\"Odd Numbers:\", oddNumbers) #print the list of odd numbers    Notice in the print statement, there is \"Even numbers:\" before the list. You can print multiple things with a comma separating them. If the thing you are printing is a string (like \"Even numbers:\"), make sure to put it in quotes. Strings are sequences of letters, numbers, or symbols that are treated as text by python.    "
},
{
  "id": "mini-project-3-3",
  "level": "2",
  "url": "mini-project-3.html#mini-project-3-3",
  "type": "Checkpoint",
  "number": "3.3.1",
  "title": "",
  "body": "  You will be using lists and the modulus operator. The modulus operator works as below:  #check if even myList = [1,2] for number in myList: if number % 2 == 0: print(number, \"is even.\") #prints the number if it is even    This time, you will need to create two new lists. One for evens and one for odds. These are the two lists you will print out at the end.  First create the list of numbers from 0 to 50. Then, create two empty lists to store the even and odd numbers. Next, loop through each number in the list of numbers. Use an if statement to check if the number is even or odd using the modulus operator. If the number is even, add it to the even numbers list. If the number is odd, add it to the odd numbers list. Finally, print out both lists.    An else statement is helpful here since a number is either even or odd. So, you can use two if statements - one for even and one for odd - or you can use the else statement after checking for even.    numbers = list(range(51)) #create a list of numbers from 0 to 50 evenNumbers = [] #create an empty list for even numbers oddNumbers = [] #create an empty list for odd numbers for number in numbers: if number % 2 == 0: #check if the number is even evenNumbers.append(number) #add to even numbers list else: oddNumbers.append(number) #add to odd numbers list print(\"Even Numbers:\", evenNumbers) #print the list of even numbers print(\"Odd Numbers:\", oddNumbers) #print the list of odd numbers    Notice in the print statement, there is \"Even numbers:\" before the list. You can print multiple things with a comma separating them. If the thing you are printing is a string (like \"Even numbers:\"), make sure to put it in quotes. Strings are sequences of letters, numbers, or symbols that are treated as text by python.   "
},
{
  "id": "functions",
  "level": "1",
  "url": "functions.html",
  "type": "Section",
  "number": "4.1",
  "title": "Functions",
  "body": " Functions   A function takes an input (or none or many inputs) and returns an output. This is useful to organize code and make reuseable code. In this section, we will write some functions and see how they work!    A Function with Boolean Output  A boolean variable in python is a variable that takes on the value True or False only. Not a number, not a string, but a truth value. You can use this in if statements to perform actions depending on the truth value.  Imagine you are writing code and find that you frequently need to check if a number is a multiple of 5. This is the perfect situation to use a function! A function is defined in the following way.    def functionName(input1,input2,input3): function code return output    The keywords are \"def\" to define the function and \"return\" for the output. You can call a function whatever you want, as long as it is not a name used by python for something else. Let's name our function and the inputs.    def mulitpleOfFive(number): code we will write    To check if we have a multiple of 5, we will see if there is a remainder when the number is divided by 5. Recall from the mini projects that % will tell you the value of the remainder. So we want a remainder of 0 when the number is divided by 5.    def multipleOfFive(number): if number%5==0: return True else: return False    That's it! That is our function! It will return True is the number we put in is a multiple of 5 and false oherwise. It does not print anything, so the following code will not show anything.    def multipleOfFive(number): if number%5==0: return True else: return False multipleOfFive(10)    But, we could put a print statement around it to see the truth value.    def multipleOfFive(number): if number%5==0: return True else: return False print(multipleOfFive(10))    We could also use it in an if statement since it returns true or false. Suppose that if a number is a multiple of 5 that we want to add 2 to it. Then, we could write:    def multipleOfFive(number): if number%5==0: return True else: return False number = 10 if multipleOfFive(number): number = number + 2 print(number)      Quadratic Formula Function  In chapter 1, you wrote code to solve one quadratic equation. In fact, you found only one real root of that equation. It is quite a bit to type to even find one root. That is the type of code that is useful to write as a function.  Recall that the solutions to a quadratic equation are: The roots are real numbers as long as we take the square root of positive numbers. If , then we are taking the square root of a negative and the roots will be complex numbers.  Let's say we just want real roots. Our function should test for real roots first. It is common to return something like \"False\" when the case does not work. That is what we will do here.    def realQuadraticSolutions(a,b,c): if (b**2 - 4*a*c) < 0: return False    Due to the , there are two roots. We will find each of these and then return a list of roots. So, we will need to define a list, find the roots, and then append them to the list. Finally, we will return the list.    def realQuadraticSolutions(a,b,c): if (b**2 - 4*a*c) < 0: return False else: roots = [] #define the list root1 = (-1*b + (b**2-4*a*c)**0.5)\/2*a #the plus root root2 = (-1*b - (b**2 - 4*a*c)**0.5)\/2*a #the minus root roots.append(round(root1,2)) #round to 2 decimals and append to list roots.append(round(root2,2)) #same return roots    Let's test our function out. What if we had ?    def realQuadraticSolutions(a,b,c): if (b**2 - 4*a*c) < 0: return False else: roots = [] #define the list root1 = (-1*b + (b**2-4*a*c)**0.5)\/2*a #the plus root root2 = (-1*b - (b**2 - 4*a*c)**0.5)\/2*a #the minus root roots.append(root1) #append to list roots.append(root2) #append to list return roots #testing print(realQuadraticSolutions(2,5,-1))    There are many ways to improve this function. For example, if someone types 0 for a, we will have issues since we are dividing by a. You could put an error message in, or comment your code that a can't be zero. We should also test that it correctly returns False when there are no real roots.    def realQuadraticSolutions(a,b,c): if (b**2 - 4*a*c) < 0: return False else: roots = [] #define the list root1 = (-1*b + (b**2-4*a*c)**0.5)\/2*a #the plus root root2 = (-1*b - (b**2 - 4*a*c)**0.5)\/2*a #the minus root roots.append(root1) #append to list roots.append(root2) #append to list return roots #testing print(realQuadraticSolutions(1,1,2))    As you can see, we correctly get False when there are no real roots.     Write a function that finds the sum of two numbers and returns the result. Print the result of adding 8 and 5 together to verify your function works.    Remember that just like variables, you can name your functions and inputs just about anything.    def sumTwoNumbers(num1,num2): return num1 + num2 print(sumTwoNumbers(8,5))        Write a function with three inputs that returns true if the third input is the product of the first two inputs and false otherwise. Check your function with two sets of inputs: (3,4,12) and (2,5,8).      def isProduct(num1,num2,num3): if num1 * num2 == num3: return True else: return False print(isProduct(3,4,12)) print(isProduct(2,5,8))        Write a function that find the area of a triangle given the base and height. Find the area of the triangle with base 10 and height 5.      def triangleArea(base,height): return 0.5 * base * height print(triangleArea(10,5))        "
},
{
  "id": "exercises-functions-1",
  "level": "2",
  "url": "functions.html#exercises-functions-1",
  "type": "Exercise",
  "number": "4.1.2.1",
  "title": "",
  "body": "  Write a function that finds the sum of two numbers and returns the result. Print the result of adding 8 and 5 together to verify your function works.    Remember that just like variables, you can name your functions and inputs just about anything.    def sumTwoNumbers(num1,num2): return num1 + num2 print(sumTwoNumbers(8,5))     "
},
{
  "id": "exercises-functions-2",
  "level": "2",
  "url": "functions.html#exercises-functions-2",
  "type": "Exercise",
  "number": "4.1.2.2",
  "title": "",
  "body": "  Write a function with three inputs that returns true if the third input is the product of the first two inputs and false otherwise. Check your function with two sets of inputs: (3,4,12) and (2,5,8).      def isProduct(num1,num2,num3): if num1 * num2 == num3: return True else: return False print(isProduct(3,4,12)) print(isProduct(2,5,8))     "
},
{
  "id": "exercises-functions-3",
  "level": "2",
  "url": "functions.html#exercises-functions-3",
  "type": "Exercise",
  "number": "4.1.2.3",
  "title": "",
  "body": "  Write a function that find the area of a triangle given the base and height. Find the area of the triangle with base 10 and height 5.      def triangleArea(base,height): return 0.5 * base * height print(triangleArea(10,5))     "
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
