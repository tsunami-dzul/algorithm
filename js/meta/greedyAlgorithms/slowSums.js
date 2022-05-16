// [4, 3, 2, 1];

const slowSums = (arr) => {
    let highest = 0;

    arr.sort(compare);

    while(arr.length > 1) {
        const sum = arr[0] + arr[1];

        arr[1] = sum;
        arr.shift();

        highest += sum;
    }

    return highest;
}

const compare = (a, b) => {
    return b - a;
}

const arr = [4, 2, 1, 3];
const resp = slowSums(arr);

console.log(resp);