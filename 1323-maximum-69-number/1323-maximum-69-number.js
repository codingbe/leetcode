/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
  const answer = [num];
  const str = String(num)
    .split("")
    .map((num) => parseInt(num));

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 6) {
      str[i] = 9;
      answer.push(str.join(""));
      str[i] = 6;
    } else {
      str[i] = 6;
      answer.push(str.join(""));
      str[i] = 9;
    }
  }
  return Math.max(...answer);
};