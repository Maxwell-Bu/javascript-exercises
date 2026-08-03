const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        if (num1 >= 0 && num2 >= 0) {
            const max = Math.max(num1, num2);
            const min = Math.min(num1, num2);
            let sum = 0;

            for (let i = min; i < max + 1; i++) {
                sum += i;
            }

            return sum;
        } else {
            return "ERROR"
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
