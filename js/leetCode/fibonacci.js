// let fibonacciMemory = [];

// function fib(n, res = [0, 1, 1]) {
//   if (res[n]) {
//       return res[n];
//   }

//   res[n] = fib(n - 1, res) + fib(n - 2, res);

//   return res[n];
// }
// 2,1
// 1
// 
const fib = (n) => {
  if(n <= 1) {
    return 1;
  }

  const f1 = fib(n-1);
  const f2 = fib(n-2);

  console.log(f1, f2);

  return f1 + f2;
}

console.log(`\n ${fib(5)}`);

// const r = fibonacci(40);

// console.log(fibonacciMemory);