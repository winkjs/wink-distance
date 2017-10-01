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

var jaro = require( 'wink-jaro-distance' );
// ## string

// ### jaro
/**
 *
 * Computes the jaro distance between two strings. This distance is always
 * between 0 and 1.
 *
 * @name string.jaro
 * @param {string} str1 — first string.
 * @param {string} str2 — second string.
 * @return {number} jaro distance between `str1` and `str2`.
 * @example
 * jaro( 'father', 'farther' );
 * // ->  0.04761904761904756
 * jaro( 'abcdef', 'fedcba' );
 * // -> 0.6111111111111112
 * jaro( 'sat', 'urn' );
 * // -> 1
 */
var jaroDistance = function ( str1, str2 ) {
  return ( jaro( str1, str2 ).distance );
}; // jaro()

module.exports = jaroDistance;
