const sumAll = function(start, stop) {
    if (!Number.isInteger(start) || !Number.isInteger(stop)) {
        return "ERROR";
    }
    if (start < 0 || stop < 0) {
        return "ERROR";
    }
    if (stop < start) {
        let temp = stop;
        stop = start;
        start = temp;
    }
    let sum = 0;
    while (start <= stop) {
        sum += start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
