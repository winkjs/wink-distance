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

// ## string

// ### hamming
/**
 *
 * Computes the hamming distance between two strings of identical length.
 * This distance is always `>= 0`.
 *
 * @name string.hamming
 * @param {string} str1 — first string.
 * @param {string} str2 — second string.
 * @return {number} hamming distance between `str1` and `str2`.
 * @example
 * hamming( 'john', 'john' );
 * // ->  0
 * hamming( 'sam', 'sat' );
 * // -> 1
 * hamming( 'summer', 'samuel' );
 * // -> 3
 * hamming( 'saturn', 'urn' );
 * // -> throws error
 */
var hamming = function ( str1, str2 ) {
  // As we may need to swap values!
  var s1 = str1,
      s2 = str2;
  // String lengths.
  var s1Length = s1.length,
      s2Length = s2.length;
  // Absolute distance between `s1` & `s2`.
  var distance = 0;

  if ( s1Length !== s2Length ) {
    throw Error( 'wink-distance: hamming requires identical length input strings.' );
  }

  // Compute distance.
  for ( var i = 0; i < s1Length; i += 1 ) {
    if ( s1[ i ] !== s2[ i ] ) distance += 1;
  }
  // Normalize the distance & return.
  return distance;
}; // hamming()

module.exports = hamming;
