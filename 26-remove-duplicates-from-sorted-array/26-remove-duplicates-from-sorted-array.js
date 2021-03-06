/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
   let prev = 0;

   for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[prev]) {
         prev++;
         nums[prev] = nums[i];
      }
   }
   return prev + 1;
};