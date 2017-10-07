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

// ## set

// ### jaccard
/**
 *
 * Computes the Jaccard distance between input sets `sa` and `sb`.
 * This distance is always between 0 and 1.
 *
 * @name set.jaccard
 * @param {set} sa — the first set.
 * @param {set} sb — the second set.
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
