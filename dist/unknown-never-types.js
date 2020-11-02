"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
// they equal if userinput: any
// userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
// This function returns never (not just void actually)
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
//# sourceMappingURL=unknown-never-types.js.map