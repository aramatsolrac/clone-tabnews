const calculator = require("../models/calculator");

test("sum 5 + 100 = 105", () => {
  expect(calculator.sum(5, 100)).toBe(105);
});

test("sum 'banana' + 100 = 'Error'", () => {
  expect(calculator.sum("banana", 100)).toBe("Error");
});
