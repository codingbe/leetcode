/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    let result = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i]+s[i+1] === "IV" || s[i]+s[i+1] === "IX" || s[i]+s[i+1] === "XL" || s[i]+s[i+1] === "XC" || s[i]+s[i+1] === "CD" || s[i]+s[i+1] === "CM") {
            result += exce(s[i+1]);
            i += 1;
        }
        else {
            result += calValue(s[i]);
        }
    }
    return result;
};

const calValue = (s) => {
    switch(s) {
        case "M":
            return 1000;
        case "D":
            return 500;
        case "C":
            return 100;
        case "L":
            return 50;
        case "X":
            return 10;
        case "V":
            return 5;
        case "I":
            return 1;
        default:
            break;
    }
}

const exce = (s) => {
    switch(s) {
        case "V":
            return 4;
        case "X":
            return 9;
        case "L":
            return 40;
        case "C":
            return 90;
        case "D":
            return 400;
        case "M":
            return 900;
        default:
            break;
    }
}