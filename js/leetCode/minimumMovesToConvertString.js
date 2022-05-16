// const minimumMoves = (s) => {
//     let min = s.split('O');

//     if(s.indexOf('X') < 0) {
//         return 0;
//     } else {
//         return min.length;
//     }
// }

const minimumMoves = (s) => {
    let count = 0;
    let flag = false;

    if(s.indexOf('O') < 0 ) {
        return 1;
    }

    for(let i=0; i<s.length; i++) {
        if(s[i] === 'X') {
            s[i] = 'O';

            count++;
            flag = true;
        }

        if(s[i] === 'O' && flag) {
            count = count - (count -1);
            flag = false;
        }
    }

    return count;
}

const s = 'OXOX';

const r = minimumMoves(s);

console.log(r);