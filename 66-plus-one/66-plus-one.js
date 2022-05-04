/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let roundUp = true;
  if (digits.length >= 16) {
    for (let i = digits.length - 1; i > 0; i--) {
      if (roundUp) {
        if (digits[i] >= 9) {
          digits[i] = 0;
          digits[i - 1] = digits[i - 1] + 1;
          if (digits[i - 1] <= 9) roundUp = false;
          else roundUp = true;
        } else {
          digits[i] += 1;
          roundUp = false;
        }
      }
    }
    return digits
      .join("")
      .split("")
      .map((num) => parseInt(num));
  } else
    return String(parseInt(digits.join("")) + 1)
      .split("")
      .map((num) => parseInt(num));
};