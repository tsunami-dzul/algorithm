'use strict'

const args = process.argv;

if(args[2] !== undefined) {
    let N = parseInt(args[2]);
    let binaryGaps = solution(N);

    console.log(`Number: ${args[2]}, binary: ${N.toString(2)}`);

    if(binaryGaps.length > 0) {
        console.log(`Binary gaps: `);
        
        binaryGaps.forEach((number, index) => {
            console.log(`${index+1}) ${number}`);
        });
    } else {
        console.log('There is not Binary gaps in the given array');
    }
}

function solution(N) {
    let binary = N.toString(2);
    let binaryGaps = [];
    let binaryCount = 0;

    let oneFound = 0;

    for(let x=0;x<binary.length;x++){        
        if(binary[x] === '1') {            
            oneFound++;
        }

        if(oneFound === 1 && binary[x] === '0') {
            binaryCount++;
        } else if(oneFound === 2) {
            binaryGaps.push(binaryCount);
            binaryCount = 0;
            oneFound = 1;
        }
    }

    binaryGaps.sort((a,b) => a-b);
    binaryGaps.reverse();

    return binaryGaps;
}