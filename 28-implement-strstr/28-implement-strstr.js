/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
   const temp = haystack.split(needle);
   if (temp.length === 1) return -1;
   else return temp[0].length;
};