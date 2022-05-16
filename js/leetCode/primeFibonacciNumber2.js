// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// the program below is complete and works as detailed in the requirements.
// the task here is to:

// 1. rationalize and understand the code as best you can.
// 2. open a PR to improve the code as you see fit.

// Converting to an Angular app or typescript is not considered a necessity here.
// We're mostly interested in understanding how engineers can critique the code & suggest improvements.

// Standardize:
// 1. function declaration to put all as arrow functions. (line 1)
// 2. naming functions to use camel case. (line 1)
// Rename the function to be more clear on what it does. (line 1)
// Added a little improvement to the performance with Math.sqrt(). (line 20)
// It is good to use the best practices and change the use of var for let / const. (line 19)
const isPrimeNumber = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

// Add memorization, so we can improve the performance.
const fibonacci = (num, fibonacciMemory = [0, 1, 1]) => {
  if (fibonacciMemory[num]) {
    return fibonacciMemory[num];
  }

  fibonacciMemory[num] = fibonacci(num - 1, fibonacciMemory) + fibonacci(num - 2, fibonacciMemory);

  return fibonacciMemory[num];
};

// Standardize:
// 1. function declaration to put all as arrow functions. (line 1)
// Rename the function to be more clear on what it does. (line 1)
// Use more clear naming for variables. (line 46, 47, 50)
// We can put all in one evaluation inside of the while itself and make it simpler. (line 50)
// Use backticks to make console message more readable.
const nextPrimeFibonacciNumber = (number) => {
  let item = 1;
  let fibonacciNumber = fibonacci(item);

  while (!(fibonacciNumber > number && isPrimeNumber(fibonacciNumber))) {
    fibonacciNumber = fibonacci(item);

    console.log(`fib ${fibonacciNumber} ${number}`);

    item = item + 1;

    console.warn(`bumping to ${fibonacciNumber}`);
  }

  console.warn(`Next prime fib ${fibonacciNumber}`);
};

nextPrimeFibonacciNumber(89);
