const sortArray = (a) => {
  let swap;
  let done = false;
  let swapped;

  while (!done) {
    swapped = 0;

    for (let i = 1; i < a.length; i++) {
      if (a[i - 1] > a[i]) {
        swap = array[i];

        array[i] = array[i - 1];
        array[i - 1] = swap;

        swapped = 1;
      }
    }

    if (swapped === 0) {
      done = true;
    }
  }

  return a;
};

const array = [9, 2, 3, 6, 0, 7, 8, 5];
// const array = [200, 100, 2, 5, 10, 3, 7, 1, 8];

const r = sortArray(array);

console.log(array);
