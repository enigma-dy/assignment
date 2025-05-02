export const divide = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};
