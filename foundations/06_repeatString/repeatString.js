const repeatString = function(string, num) {
    stringJoin = ''
    if (num < 0) {
        return 'ERROR';
    } else {
        for (i = 1; i <= num; i++) {
            stringJoin += string;
        };
    };
    return stringJoin;
};

// Do not edit below this line
module.exports = repeatString;
