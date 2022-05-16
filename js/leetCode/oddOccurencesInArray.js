'use strict'

let arr = process.argv[2];

if(arr !== undefined) {
    let a = arr.split(',');
    let A = a.map((item) => {
        return parseInt(item);
    });

    let result = solution(A);

    console.log(`unpaired: ${result}`);
}

function solution(A) {
    for(let i=0;i<A.length;i++){
        if(A[i] !== -1) {
            let indexPair = A.indexOf(A[i], i+1);
    
            if(indexPair === -1){
                return A[i];
            } else {
                A[indexPair] = -1;
            }
        }
    }    
}