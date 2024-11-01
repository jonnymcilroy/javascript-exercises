const repeatString = function (string, repeats) {
    if (repeats < 0) {
        return 'ERROR'
    }
    let result = ''
    for (let i = 1; i <= repeats; i++) {
        result += string
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
