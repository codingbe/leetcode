/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((end + start) / 2);

  while (end - start >= 0) {
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else if (nums[mid] > target) end = mid - 1;
    mid = Math.floor((end + start) / 2);
  }
  return mid + 1;
};