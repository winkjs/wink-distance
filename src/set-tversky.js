//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) 2017  GRAYPE Systems Private Limited
//
//     This file is part of “wink-distance”.
//
//     “wink-distance” is free software: you can redistribute
//     it and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-distance” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-distance”.
//     If not, see <http://www.gnu.org/licenses/>.


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
 * @name set.tversky
 * @param {set} sa — the first set or the prototype.
 * @param {set} sb — the second set or the variant.
 * @param {number} [alpha=0.5] — the prototype weight.
 * @param {number} [beta=0.5] — the variant weight.
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
