# Exercises

This repository provides some exercises for the online course "Computers are Binary Creatures". Sign up to the course for free at [app.lrn.company](http://app.lrn.company).

## Before you start

To run this exercise you need git, node and npm installed. Open a new terminal window. Navigate to a folder where you want to save the exercise. Then clone the repository:

```
$ git clone https://github.com/jmp-exercises/binary-system.git
```

Switch into the folder and install the npm dependencies.

```
$ cd binary-system
$ npm install
```

Now you can run the tests by executing:

```
$ npm test
```

You should see an output to your terminal window that indicates failed test cases.

## Exercise 1

Write a function that takes a binary string (a string that only consists of the letters "1" and "0") and returns the integer number that it is representing. You can assume that the string is never longer than 32 letters. JavaScript comes with a function that does exactly this for you but obviously you want to write your own algorithm.

## Exercise 2

Write a function that does the opposite of the function in exercise 1. It takes a number and returns a string if the binary system representation of the number.

> _Note:_
> To run the tests for exercise 2 change the `xdescribe` to `describe` to activate the tests in the tests file at `src/binary.test.js`.

## Bonus Exercise

Write a function that takes two parameters: number to turn into a string and a base representation. This function is a more general version of the function above. Your function should be able to handle any base representation between 2 and 16. For systems that exeed the 10 digits available in the decimal system use `A` to represent 10, `B` to represent 11, and so on.

> _Note:_
> To run the tests for the bonus exercise change the `xdescribe` to `describe` to activate the tests in the tests file at `src/binary.test.js`.
