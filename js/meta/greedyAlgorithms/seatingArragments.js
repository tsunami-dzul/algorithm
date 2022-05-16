const seatingArragment = (arr) => {
    arr.sort(compare);
    let awka = 0;

    for(let i = 0; i < arr.length-2; i++) {
        awka = Math.max(awka, (arr[i+2] - arr[i]));
    }

    return awka;
}


const compare = (a, b) => {
    return a-b;
}

const arr = [5, 10, 6, 8, 11];
const resp = seatingArragment(arr);

console.log(resp);