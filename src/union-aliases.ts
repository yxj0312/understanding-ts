type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';


function combine(
    // input1: number | string,
    input1: Combinable,
    input2: number | string, 
    // resultConversion: string
    // resultConversion: 'as-number' | 'as-text'
    resultConversion: ConversionDescriptor
    ) {
    let result:any;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString;
    }

    return result;
}

const combinedAges = combine(30, 60, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '60', 'as-number');

const combinedName = combine('Max', 'Anna', 'as-text');