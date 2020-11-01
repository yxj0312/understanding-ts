let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// they equal if userinput: any
// userName = userInput;

if (typeof userInput === 'string') {
    userName = userInput;
}

// This function returns never (not just void actually)
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);