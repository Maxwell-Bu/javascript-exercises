const palindromes = function (phrase) {
    phrase = phrase.toUpperCase();
    let reversed = "";
    let filteredString = "";

    for (let i = 0; i < phrase.length; i++) {
        const letterCode = phrase.charCodeAt(i);
        if (letterCode >= 48 && letterCode <= 57 || letterCode >= 65 && letterCode <= 90) {
            filteredString += phrase[i];
        }
    }
    
    for (i = filteredString.length -1; i >=0; i--) {
        reversed += filteredString[i];
    }

    return filteredString === reversed;

};

// Do not edit below this line
module.exports = palindromes;
