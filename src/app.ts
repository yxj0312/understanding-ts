// ! acts as an if check for button
const button = document.querySelector('button')!;

// noImplicitReturns
function add1(n1:number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
}

function clickHandler(message: string) {
    // noUnusedLocals
    let userName = "Max";
    console.log('Clicked!');
};

if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome"));
}