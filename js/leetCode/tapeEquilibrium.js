if(process.argv[2] !== undefined) {
    let a = process.argv[2].split(',');

    let A = a.map((item) => {
        return parseInt(item);
    });

    let result = solution(A);

    console.log(result);
}

function solution(A) {
    let less = A.reduce((a,b) => a+b);
    let sumPart1 = 0;
    let diff = 0;

    for(let i=0; i<A.length-1; i++) {        
        let sumPart2 = 0;

        sumPart1 += A[i];

        // sumPart2 = A.reduce((a, b, index) => {
        //     if(index > i) {
        //         return a+b;
        //     } else {
        //         return 0;
        //     }
        // }, 0);

        for(let j=(i+1); j<A.length; j++) {
            sumPart2 += A[j];
        }

        diff = Math.abs(sumPart1 - sumPart2);

        if(diff < less) {
            less = diff;
        }
    }

    return less;
}