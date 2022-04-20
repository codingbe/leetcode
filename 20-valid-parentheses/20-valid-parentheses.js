/**
 * @param {string}
 * @return {boolean}
 */
const isValid = (s) => {
   const stack = [];

   for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") stack.push(s[i]);
      else {
         switch (s[i]) {
            case ")":
               if (stack.pop() !== "(") return false;
               break;
            case "]":
               if (stack.pop() !== "[") return false;
               break;
            case "}":
               if (stack.pop() !== "{") return false;
               break;
         }
      }
   }
   return stack.length === 0;
};