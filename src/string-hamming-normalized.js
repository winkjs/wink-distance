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

// ### hammingNormalized
/**
 *
 * Computes the normalized hamming distance between two strings. These strings
 * may be of different lengths. Normalized distance is always between 0 and 1.
 *
 * @name string.hammingNormalized
 * @param {string} str1 — first string.
 * @param {string} str2 — second string.
 * @return {number} normalized hamming distance between `str1` and `str2`.
 * @example
 * hammingNormalized( 'john', 'johny' );
 * // ->  0.2
 * hammingNormalized( 'sam', 'sam' );
 * // -> 0
 * hammingNormalized( 'sam', 'samuel' );
 * // -> 0.5
 * hammingNormalized( 'saturn', 'urn' );
 * // -> 1
 */
var hammingNormalized = function ( str1, str2 ) {
  // As we may need to swap values!
  var s1 = str1,
      s2 = str2;
  // String lengths.
  var s1Length = s1.length,
      s2Length = s2.length;
  // Absolute distance between `s1` & `s2`.
  var distance;
  // Helper variables.
  var i, imax;
  var dividend;
  // Initialize stuff and may have to swap `s1`/`s2`.
  if ( s1Length < s2Length ) {
    // Swap `s1` and `s2` values.
    s1 = [ s2, s2 = s1 ][ 0 ];
    // Initialize distance as the difference in lengths of `s1` & `s2`.
    distance = s2Length - s1Length;
    imax = s1Length;
    // Initialize dividend by the larger string length.
    dividend = s2Length;
  } else {
    // No need to swap, but do initialize stuff.
    distance = s1Length - s2Length;
    imax = s2Length;
    dividend = s1Length;
  }
  // Compute distance.
  for ( i = 0; i < imax; i += 1 ) {
    if ( s1[ i ] !== s2[ i ] ) distance += 1;
  }
  // Normalize the distance & return.
  return ( dividend ) ? ( distance / dividend ) : 0;
}; // hammingNormalized()

module.exports = hammingNormalized;
