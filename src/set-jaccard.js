//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) GRAYPE Systems Private Limited
//
//     This file is part of “wink-distance”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
// Because we want to logically group the variables.
/* eslint sort-vars: 0 */

// ## set

// ### jaccard
/**
 *
 * Computes the Jaccard distance between input sets `sa` and `sb`.
 * This distance is always between 0 and 1.
 *
 * @method set.jaccard
 * @param {set} sa the first set.
 * @param {set} sb the second set.
 * @return {number} the Jaccard distance between `sa` and `sb`.
 *
 * @example
 * // Set for :-)
 * var sa = new Set( ':-)' );
 * // Set for :-(
 * var sb = new Set( ':-(' );
 * jaccard( sa, sb );
 * // -> 0.5
 */
var jaccard = function ( sa, sb ) {
  var intersectSize = 0;
  var distance;
  // Use smaller sized set for iteration.
  if ( sa.size < sb.size ) {
    sa.forEach( function ( element ) {
      if ( sb.has( element ) ) intersectSize += 1;
    } );
  } else {
    sb.forEach( function ( element ) {
      if ( sa.has( element ) ) intersectSize += 1;
    } );
  }
  // Compute Jaccard similarity while taking care of case when dividend is 0!
  distance = (
              ( sa.size || sb.size ) ?
                1 - ( intersectSize / ( sa.size + sb.size - intersectSize ) ) :
                0
             );
  return distance;
}; // jaccard()

 // Export Jaccard.
 module.exports = jaccard;
