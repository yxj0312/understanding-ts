"use strict";
function combine(
// input1: number | string,
input1, input2, 
// resultConversion: string
// resultConversion: 'as-number' | 'as-text'
resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString;
    }
    return result;
}
const combinedAges = combine(30, 60, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '60', 'as-number');
const combinedName = combine('Max', 'Anna', 'as-text');
//# sourceMappingURL=union-aliases.js.map