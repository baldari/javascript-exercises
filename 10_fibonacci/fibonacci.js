const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (num == 1) {
        return 1;
    }
    let x = 1;
    let y = 0;
    let sum;
    for (let i = 0; i < num - 1; i++) {
        sum = x + y;
        let temp = x;
        x = sum;
        y = temp;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
