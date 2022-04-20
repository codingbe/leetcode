/**
 * @param {string}
 * @return {boolean}
 */
const isValid = (s) => {
   const brackets = ["()", "[]", "{}"];
   let arr = s.split("").slice(0);

   while (arr.length > 0) {
      let temp;
      for (let i = 0; i < arr.length; i++) {
         if (brackets.includes(arr[i] + arr[i + 1])) {
            temp = arr.splice(i, 2);
            i = 0;
         }
      }
      if (!temp) {
         return false;
      }
   }

   return arr.length === 0;
};