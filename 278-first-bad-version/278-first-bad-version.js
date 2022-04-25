/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return 1;
    let start = 1;
    let end = n;
    let mid = Math.floor((start + end) / 2);
    while (end >= start) {
      if (!isBadVersion(mid)) start = mid + 1;
      else if (isBadVersion(mid)) end = mid - 1;
      mid = Math.floor((start + end) / 2);
    }
    return start;
  };
};
