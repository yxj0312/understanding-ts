"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked!');
}
;
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome"));
}
//# sourceMappingURL=app.js.map