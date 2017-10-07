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

// ## vector

// ### taxicab
/**
 *
 * Computes the taxicab or manhattan distance between two vectors of identical
 * length.
 *
 * @name vector.taxicab
 * @param {number} va — the first vector.
 * @param {number} vb — the second vector.
 * @return {number} taxicab distance between `va` and `vb`.
 *
 * @example
 * taxicab( [ 0, 0 ], [ 6, 6 ] );
 * // -> 12
 */
var taxicab = function ( va, vb ) {
  var imax;
  if ( (imax = va.length) !== vb.length ) {
    throw Error( 'wink-distance: taxicab requires identical lenght input vectors.' );
  }
  // Initialize taxicab distance.
  var distance = 0;
  // Compute taxicab distance.
  for ( var i = 0; i < imax; i += 1 ) distance += Math.abs( va[ i ] - vb[ i ] );

  return distance;
}; // taxicab()

module.exports = taxicab;
