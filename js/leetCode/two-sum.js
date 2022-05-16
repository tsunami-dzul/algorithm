// const twoSum = (nums, target) => {
//     let pointer1 = 0;
//     let pointer2 = 1;

//     do{
//         const sum = nums[pointer1] + nums[pointer2];

//         if(sum === target) {
//             return [pointer1, pointer2];
//         } else {
//             pointer2++;
//         }

//         if(pointer2 >= nums.length) {
//             pointer1++;
//             pointer2 = pointer1 + 1;
//         }

//     } while(pointer1 < nums.length-1);

//     return -1;
// }

const twoSum = (nums, target) => {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            const sum = nums[i] + nums[j];

            if(sum === target) {
                return [i, j];
            }
        }
    }

    return -1;
}

const nums = [2,8,11,15,2,4,7];
const target = 9;

const result = twoSum(nums, target);

console.log(result);