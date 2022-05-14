/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
  const answer = [num];
  const arr = String(num)
    .split("")
    .map((num) => parseInt(num));

  for (let i = 0; i < arr.length; i++) {
    const temp = arr.slice(0);
    temp[i] === 6 ? (temp[i] = 9) : (temp[i] = 6);
    answer.push(parseInt(temp.join("")));
  }
  return Math.max(...answer);
}; 