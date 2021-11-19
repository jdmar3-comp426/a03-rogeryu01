/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
 export function sumToString(a, b) {

    let x = a + b
    var z = b + "";
    return  (a) + ' + ' + (b) +' = ' + x

}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {

    let min = startNumber;
    let max = endNumber;
    let counter = startNumber
    const array =[]

    for (let i = 0 ;i < endNumber - startNumber + 1; i++ ) {
      
        array[i] = counter
        counter++

    }

    return array

}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {

    let array = numbers;
    let Cmax = 0;
    let Cmin = 100000000000;

    for (let i = 0; i < array.length; i++) {

    if (array[i] < Cmin) {
        Cmin = array[i]
    }      

    if (array[i] > Cmax) {
        Cmax = array[i]
    }
    }

    let returnarray = {max: Number(Cmax), 
        min: Number(Cmin)};

    return returnarray;
}


/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {



return _.countBy(array)

}

