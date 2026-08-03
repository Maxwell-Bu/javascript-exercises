const reverseString = function(string) {
    reversedString = '';
    for (i = 0; i < string.length; i++) {
        reversedString = string[i] + reversedString;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
