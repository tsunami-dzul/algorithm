let args = process.argv[2];

if(args !== undefined && process.argv[3] !== undefined) {
    let a = process.argv[2].split(',');
    let K = process.argv[3];
    
    let A = a.map((item) => {
        return parseInt(item);
    });
    
    let result = solution(A, K);
    
    console.log(result);
} else {
    console.log('No arguments were provided');
}

function solution(A, K) {
    for(let i=1;i<=K;i++){
        let p = A.pop();

        A.unshift(p);
    }

    return A;
}