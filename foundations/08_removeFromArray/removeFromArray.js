const removeFromArray = function(array, ...takeyoutey) {

    for (const take of takeyoutey) {
        array = array.filter(item => item !== take)
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
