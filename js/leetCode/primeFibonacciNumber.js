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
// 2. the functions namimg to use cammel case. (line 1)
// Rename the function to be more clear on what it does. (line 1)
// Added a little improvement (line 19) Math.sqrt()
// Follow always best pratices and change the use of var for let / const (line 19)
const isPrimeNumber = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

// Add memorization, so we can improve the performance.
const fibonacci = (num) => {
  if (num <= 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
};

// Standardize:
// 1. function declaration to put all as arrow functions. (line 1)

// Rename the function to be more clear on what it does. (line 1)
// Follow always best pratices and change the use of var for let / const (line 48)
// Use more clear namimg for variables. (line 46, 47, 50)

const nextPrimeFibonacciNumber = (number) => {
  let nextPrimeNumber = 0;
  let item = 1;

  while (true) {
    const fibonacciNumber = fibonacci(item);

    console.log('fib', fibonacciNumber, number);

    if (fibonacciNumber > number) {
      if (isPrimeNumber(fibonacciNumber)) {
        nextPrimeNumber = fibonacciNumber;
        break;
      } else {
        item = item + 1;
        console.warn('bumping to ', fibonacciNumber);
      }
    } else {
      item = item + 1;
      console.warn('bumping to', fibonacciNumber);
    }
  }

  console.warn('Next prime fib ', nextPrimeNumber);
};

nextPrimeFibonacciNumber(89);
