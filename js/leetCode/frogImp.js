let args = process.argv;
let x = parseInt(process.argv[2]);
let y = parseInt(process.argv[3]);
let d = parseInt(process.argv[4]);

let result = solution(x,y,d);

console.log(result);

function solution(X, Y, D) {
    let jumps = X;

    while(jumps < Y) {
        jumps += D;
    }

    return Math.round(jumps/D);
}