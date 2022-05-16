function solution(A, B) {
    let pairsArray = [];
    let filteredArray = [];
    let fullArray = A.concat(B);
    let orderedArray = fullArray.sort((a, b) => a-b);

    filteredArray.push(orderedArray[0]);

    // Filtering array to remove repeated numbers
    for(let x=1;x<orderedArray.length;x++) {
        let found = false;

        for(let y=0;y<filteredArray.length;y++){           
            if(filteredArray[y] === orderedArray[x]) {
                found = true;
                break;
            }
        }

        if(!found){
            filteredArray.push(orderedArray[x]);
        }
    }

    // taking the pair for rectangles sizing
    for(let k=0; k < A.length; k++) {
        let pair = [];

        pair.push(A[k]);
        pair.push(B[k]);

        pairsArray.push(pair);
    }

    let maxArray = [];
    let currentMax = 0;

    // taking the maximum number of retangles that can be arranged into strip based on all the 
    // numbers contained in the A and B arrays
    for(let x=0;x<filteredArray.length;x++) {
        let pairArray = pairsArray.map((item) => {
            if(item.indexOf(filteredArray[x]) >= 0) {
                return item;
            }
    
            return 0;
        });

        let filtered = pairArray.filter((p) => p !== 0);

        if(filtered.length > currentMax) {
            maxArray = filtered;
            currentMax = filtered.length;
        }        
    }

    return maxArray;
}

let a = [2, 3, 2, 3, 5];
let b = [3, 4, 2, 4, 2];

let arranged = solution(a, b);

console.log(arranged);