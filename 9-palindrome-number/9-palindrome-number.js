/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    return String(x) === String(x).split("").reverse().join("");
};