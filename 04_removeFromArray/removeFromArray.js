const removeFromArray = function(arr, ...args) {
    const array = [];
    arr.forEach((element) => {
        if (!args.includes(element)) {
            array.push(element);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
