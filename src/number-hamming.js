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

/* eslint-disable no-bitwise */

// ## number

// ### hamming
/**
 *
 * Computes the the hamming distance between two numbers; each number is
 * assumed to be decimal representation of a binary number.
 *
 * @name number.hamming
 * @param {number} na — the first number.
 * @param {number} nb — the second number.
 * @return {number} hamming distance between `na` and `nb`.
 *
 * @example
 * hamming( 8, 8 );
 * // -> 0
 * hamming( 8, 15 );
 * // -> 3
 * hamming( 9, 15 );
 * // -> 2
 */
var hamming = function ( na, nb ) {
  // Initialize hamming distance.
  var distance = 0;
  // Compute hamming distance.
  for ( var xor = na ^ nb; xor > 0; distance += 1 ) xor &= ( xor - 1 );

  return distance;
}; // hamming()

module.exports = hamming;
