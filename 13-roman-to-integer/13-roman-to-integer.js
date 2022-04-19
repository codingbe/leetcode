/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    let result = 0;
    const exec = ["IV", "IX", "XL", "XC", "CD", "CM"];
    const symbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for(let i=0; i<s.length; i++) {
        if(exec.indexOf(s[i]+s[i+1]) !== -1) {
            result += symbol[s[i+1]] - symbol[s[i]];
            i+=1;
        }
        else {
            result += symbol[s[i]];
        }
    }
    return result;
};