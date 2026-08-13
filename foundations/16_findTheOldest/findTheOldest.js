const findTheOldest = function(arr) {
    const d = new Date();
    const year = d.getFullYear();
    const ages = arr.sort((a, b) => {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = year;
        } else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = year;
        }

        return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1;
    });

    return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
