
if(process.argv[2] !== undefined) {
    let A = process.argv[2].split(',').map((item) => {
        return parseInt(item);
    });

    let result = solution(A);

    console.log(`The missed element is: ${result}`);
}

function solution(A) {
    let sorted = A.sort((a,b) => a-b);

    for(let i=0; i<sorted.length; i++) {
        if(sorted[i] + 1 !== sorted[i + 1]) {
            return sorted[i] + 1;
        }
    }
}
