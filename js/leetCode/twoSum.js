const twoSum = (arr, target) => {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if((arr[i]+arr[j]) === target) {
                return [i, j];
            }
        }
    }

    return null;
}

const twoSumHashMap = (arr, target) => {
    let arrHashMap = [];

    for(let i = 0; i < arr.length; i++) {
        const ntF = target - arr[i];

        if(arrHashMap.indexOf(arr[i]) === -1) {
            arrHashMap.push(ntF);
        } else {
            return [arrHashMap.indexOf(arr[i]), i];
        }
    }

    return null;
}

const twoSumHash = (arr, target) => {
    let hash = {};

    for(let i=0; i<arr.length; i++) {
        const index = hash[arr[i]];

        if(index >= 0) {
            return [index, i];
        } else {
            hash[target - arr[i]] = i;
        }
    }

    return null;
}

const a = [1,3,7,2,9];

const result = twoSumHash(a, 11);

console.log(result);