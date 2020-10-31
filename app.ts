let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// they equal if userinput: any
// userName = userInput;

if (typeof userInput === 'string') {
    userName = userInput;
}