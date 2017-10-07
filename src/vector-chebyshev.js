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

// ### chebyshev
/**
 *
 * Computes the chebyshev or manhattan distance between two vectors of identical
 * length.
 *
 * @name vector.chebyshev
 * @param {number} va — the first vector.
 * @param {number} vb — the second vector.
 * @return {number} chebyshev distance between `va` and `vb`.
 *
 * @example
 * chebyshev( [ 0, 0 ], [ 6, 6 ] );
 * // -> 6
 */
var chebyshev = function ( va, vb ) {
  var imax;
  if ( (imax = va.length) !== vb.length ) {
    throw Error( 'wink-distance: chebyshev requires identical lenght input vectors.' );
  }
  // Initialize chebyshev distance.
  var distance = 0;
  // Compute chebyshev distance.
  for ( var i = 0; i < imax; i += 1 ) distance = Math.max( Math.abs( va[ i ] - vb[ i ] ), distance );

  return distance;
}; // chebyshev()

module.exports = chebyshev;
