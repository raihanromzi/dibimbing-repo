// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
let missing_number = function (nums) {
    let arrayFinal = Array.from({length: nums.length + 1}, (v, i) => i);
    let numsArrSorted = nums.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    for (let i = 0; i <= nums.length + 1; i++) {
        if (numsArrSorted[i] !== arrayFinal[i]) {
            return arrayFinal[i]
        }
    }
};

console.log(missing_number([45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]))

