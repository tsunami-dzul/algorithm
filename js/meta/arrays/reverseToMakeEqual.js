/*
    Reverse to Make Equal
    Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
    Signature
    bool areTheyEqual(int[] arr_a, int[] arr_b)
    Input
    All integers in array are in the range [0, 1,000,000,000].
    Output
    Return true if B can be made equal to A, return false otherwise.
    Example
    A = [1, 2, 3, 4]
    B = [1, 4, 3, 2]
    output = true
    After reversing the subarray of B from indices 1 to 3, array B will equal array A.
*/

const areTheyEqual = (array_a, array_b) => {
    for(let i=0; i<array_a.length; i++) {
        let itemExist= false;

        for(let j=0; j<array_b.length; j++) {
            if(array_a[i] === array_b[j]) {
                itemExist = true;
                break;
            }
        }

        if(!itemExist) {
            return false;
        }
    }

    return true;
}

const resp = areTheyEqual([1, 2, 3, 4], [1, 4, 3, 2]);

console.log(resp);