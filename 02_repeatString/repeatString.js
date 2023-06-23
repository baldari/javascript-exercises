const repeatString = function(str, num) {
  if (num < 0) {
    return "ERROR"
  }
  let newstr = "";
  for (let i = 0; i < num; i++) {
    newstr += str;
  }
  return newstr;
};

// Do not edit below this line
module.exports = repeatString;
