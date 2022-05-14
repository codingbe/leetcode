/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
  const answer = [num];
  const str = String(num)
    .split("")
    .map((num) => parseInt(num));
  let check = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 6) {
      str[i] = 9;
      check = true;
    } else {
      str[i] = 6;
      check = false;
    }
    answer.push(str.join(""));
    check ? (str[i] = 6) : (str[i] = 9);
  }
  return Math.max(...answer);
};