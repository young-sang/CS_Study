function isValidParentheses(expression){
    const stack = [];
    const pairs = {")":"(", "}":"{","]":"["};
    for(let char of expression){
        if(["(", "{", "["].includes(char)){
            stack.push(char);
        }else if([")","}","]"].includes(char)){
            if(stack.pop() !== pairs[char]){
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("({[]})")); // true
console.log(isValidParentheses("({[})"));  // false