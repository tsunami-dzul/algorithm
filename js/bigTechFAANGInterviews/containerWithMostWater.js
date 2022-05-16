// [1, 8, 6, 2, 9, 4]

const containerWithMostWater = (arr) => {
    let greatestArea = null;
    let greatest = 0;

    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++) {
            const lessHeight = arr[i] < arr[j] ? arr[i] : arr[j];
            const area = lessHeight * j;

            if(area > greatest) {
                greatest = area;
                greatestArea = [arr[i], arr[j]];
            }
        }
    }

    return greatestArea;
}

const containerWithMostWaterSlidingPointer = (arr) => {
    let a = 0;
    let b = arr.length-1;
    let maxArea = 0;

    while(a < b) {
        const height = Math.min(arr[a], arr[b]);
        const width = (b-a);
        const area = height * width;

        maxArea = Math.max(maxArea, area);

        if(arr[a+1] <= arr[b]) {
            a++;
        } else {
            b--;
        }
    }

    return maxArea;
}

//[1, 8, 6, 2, 9, 4]
const resp = containerWithMostWaterSlidingPointer([4,8,1,8,3,9]);

console.log(resp);