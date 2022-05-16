function solution(X, A)  {
    let AObject = A.map((value, index) => {
        return {
            value,
            index
        }
    });

    let sortedA = AObject.sort((a, b) => {
        if( a.value > b.value ) {
            return 1;
        }

        if(a.value < b.value) {
            return -1;
        }

        return 0;
    });

    let removeRepeated = sortedA.filter((s, index, array) => {            
        if( index + 1 !== array.length ) {
            if(s.value !== array[ index + 1 ].value) {
                return s;
            }
        } else {
            return s;
        }
    });

    for(let i = 0; i < X - 1; i++) {
        if( removeRepeated[ i ].value + 1 !== removeRepeated[ i + 1 ].value ) {
            return -1;
        }
    }

    return removeRepeated.find( ( f ) => f.value === X).index;
}

function solution2(X, A) {
    let baseArray = [];
    let Xindex = -1;

    for ( let x = 1; x < X + 1; x++ ) {
        baseArray.push( x );
    }

    for ( let i = 0; i < baseArray.length; i++ ) {
        let itemFound = false;

        for ( let j = 0; j < A.length; j++ ) {
            if ( baseArray[ i ] === A[ j ] ) {
                itemFound = true;

                if ( baseArray[ i ] === X ) {
                    Xindex = j;
                }

                break;
            }
        }

        if( !itemFound ) {
            return -1;
        }
    }

    return Xindex;
}

function solution3(X, A) {
    if ( X === 0 ) {
        return;
    }

    solution3( X - 1, A );

   findItem
}

function findItem(item, A) {
    let itemFound = false;

    for ( let i=0; i < A.length; i++ ) {
        if ( X === A [ i ] ) {
            itemFound = true;

            break;
        }
    }

    return itemFound;
}

const X = 5;
const A = [ 1, 3, 1, 4, 2, 3, 5, 4 ];

const result = solution3(X, A);

console.log(result);