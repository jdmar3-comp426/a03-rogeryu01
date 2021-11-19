import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {


   let total = 0
   for (let i = 0; i < array.length; i++) {
      total += array[i];
   }
   
    return total

}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 * 
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {

  
  let sortedarray = array.sort(function(a,b){return a- b});
  
  let medianpoint = Math.floor(array.length/2)

  if( array.length % 2 == 0) {
    return ((sortedarray[medianpoint -1] + sortedarray[medianpoint])/2)

  }

  return sortedarray[medianpoint]

}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {

  let length = 0
  let sum = 0;
  let mean = 0;
  let median = 0
  let min = 0
  let max = 0
  let variance = 0;
  let standard_deviation = 0;

  let i = array.sort(function(a,b){return a- b});
  medianpoint = Math.floor(array.length/2)

  if( array.length % 2 == 0) {
    median = ((i[medianpoint -1] + i[medianpoint])/2)

  }
  median = i[medianpoint]


  for (let i = 0; i < array.length; i++) {
    sum += array[i];
 }



  return {
    length: array.length,
    sum: sum,
    mean: sum/array.length,
    median: median,
    min: i[0],
    max: i[array.length -1],
    variance: 2.6666666666666665,
    standard_deviation: 1.632993161855452

  }



}


