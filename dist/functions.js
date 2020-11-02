"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValues;
combineValues = add;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map