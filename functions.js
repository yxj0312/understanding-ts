"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void  {
//     console.log('Result: ' + num);
// }
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// printResult(add(5,12));
var combineValues;
combineValues = add;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// Error:
// combineValues = printResult;
