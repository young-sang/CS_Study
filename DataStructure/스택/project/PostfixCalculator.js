function evaluatePostfix(expression) {
  const stack = [];
  const operators = { "+": (a, b) => a + b, "-": (a, b) => a - b, "*": (a, b) => a * b, "/": (a, b) => a / b };

  for (let token of expression.split(" ")) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else if (operators[token]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operators[token](a, b));
    }
  }

  return stack.pop();
}

console.log(evaluatePostfix("3 4 + 2 * 7 /")); // (3 + 4) * 2 / 7 = 2
