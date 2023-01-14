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
var validate = require( 'wink-helpers' ).validate;
// ## set

// ### tversky
/**
 *
 * Computes the tversky distance between input sets `sa` and `sb`.
 * This distance is always between 0 and 1. Tversky calls `sa` as
 * **prototype** and `sb` as **variant**. The `alpha` corresponds
 * to the weight of prototype, whereas `beta` corresponds to the
 * weight of variant.
 *
 * @method set.tversky
 * @param {set} sa the first set or the prototype.
 * @param {set} sb the second set or the variant.
 * @param {number} [alpha=0.5] the prototype weight.
 * @param {number} [beta=0.5] the variant weight.
 * @return {number} the tversky distance between `sa` and `sb`.
 *
 * @example
 * // Set for :-)
 * var sa = new Set( ':-)' );
 * // Set for :p
 * var sb = new Set( ':p' );
 * tversky( sa, sb, 1, 0 );
 * // -> 0.6666666666666667
 * tversky( sa, sb );
 * // -> 0.6
 * tversky( sa, sb, 0.5, 0.5 );
 * // -> 0.6
 * tversky( sa, sb, 0, 1 );
 * // -> 0.5
 */
var tversky = function ( sa, sb, alpha, beta ) {
  // Contains `alpha` & `beta` values respectively after the validations.
  var a, b;
  // Size of the intersection between set `sa` and `sb`.
  var intersectSize = 0;
  // Their differences!
  var saDIFFsb, sbDIFFsa;
  // The distance between `sa` and `sb`.s
  var distance;
  a = ( alpha === undefined ) ? 0.5 : alpha;
  b = ( beta === undefined ) ? 0.5 : beta;
  if ( a < 0 || b < 0 || !validate.isFiniteNumber( a ) || !validate.isFiniteNumber( b ) ) {
    throw Error( 'wink-distance: tversky requires aplha & beta to be positive numbers.' );
  }
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
  saDIFFsb = sa.size - intersectSize;
  sbDIFFsa = sb.size - intersectSize;
  // Compute Tversky distance.
  distance = 1 - ( intersectSize / ( intersectSize + ( a * saDIFFsb ) + ( b * sbDIFFsa ) ) );
  // Handle divide by zero!
  return ( ( isNaN( distance ) ) ? 0 : distance );
}; // tversky()

// Export tversky.
module.exports = tversky;
