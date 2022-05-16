function solution(A) {
    
    if(A.length < 0) {
        return;
    }

    let sum = 0;

    for(let i = 0; i < A.length; i++) {
        sum += A[i];

        solution(A);
    }
}


const A = [3,1,2,4,3];

solution();