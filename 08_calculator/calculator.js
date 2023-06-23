const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum;
};

const multiply = function(...args) {
  let mult = 1;
  for (let i = 0; i < args.length; i++) {
    mult *= args[i];
  }
  return mult;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }
	return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
