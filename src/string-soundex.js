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

var soundex = require( 'wink-nlp-utils' ).string.soundex;
// ## string

// ### soundex
/**
 *
 * Computes the soundex distance between two strings. This distance is either
 * 1 indicating phonetic similarity or 0 indicating no similarity.
 *
 * @name string.soundex
 * @param {string} str1 — first string.
 * @param {string} str2 — second string.
 * @return {number} soundex distance between `str1` and `str2`.
 * @example
 * soundex( 'Burroughs', 'Burrows' );
 * // ->  0
 * soundex( 'Ekzampul', 'example' );
 * // -> 0
 * soundex( 'sat', 'urn' );
 * // -> 1
 */
var soundexDistance = function ( str1, str2 ) {
  return ( soundex( str1 ) === soundex( str2 ) ) ? 0 : 1;
}; // soundexDistance()

module.exports = soundexDistance;
