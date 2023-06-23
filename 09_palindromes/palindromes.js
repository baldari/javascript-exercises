const palindromes = function (str) {
    str = str.toLowerCase();
    let checker = "abcdefghijklmnopqrstuvwxyz1234567890"
    let x = 0;
    let y = str.length - 1;
    while (y > x) {
        if (checker.includes(str[x]) == false) {
            x++;
            continue;
        }
        if (checker.includes(str[y]) == false) {
            y--;
            continue;
        }
        if (str[x] != str[y]) {
            return false;
        }
        x++;
        y--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
