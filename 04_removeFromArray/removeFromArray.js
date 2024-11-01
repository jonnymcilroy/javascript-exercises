const removeFromArray = function (arrayNumbers, ...args) {
    results = []
    arrayNumbers.forEach((item) => {
        if (!args.includes(item)) {
            results.push(item)
        }
    });
    return results
}


// Do not edit below this line
module.exports = removeFromArray;

