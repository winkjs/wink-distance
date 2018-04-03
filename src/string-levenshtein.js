//     wink-distance
//     Multilingual tokenizer that automatically tags each token with its type.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
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
// Scratchpad.
var col = [];
// Char Codes Cache.
var ccc = [];

// ## string

// ### levenshtein
/**
 *
 * Computes the levenshtein distance between two strings. This distance is computed
 * as the number of deletions, insertions, or substitutions required to transform a
 * string to another. Levenshtein distance is always an integer with a value of 0 or more.
 *
 * @name string.levenshtein
 * @param {string} str1 — first string.
 * @param {string} str2 — second string.
 * @return {number} levenshtein distance between `str1` and `str2`.
 * @example
 * levenshtein( 'example', 'sample' );
 * // ->  3
 * levenshtein( 'distance', 'difference' );
 * // -> 5
 */
var levenshtein = function ( str1, str2 ) {
  // This method was first presented by Levenshtein, V. I. in his paper titled
  // "[Binary Codes Capable of Correcting Deletions, Insertions and Reversals](https://nymity.ch/sybilhunting/pdf/Levenshtein1966a.pdf)".
  // The original paper was in Russian and the link here is to an English translation.
  // This implementation is inspired by the article,
  // "[Fast, memory efficient Levenshtein algorithm](https://www.codeproject.com/Articles/13525/Fast-memory-efficient-Levenshtein-algorithm)".

  // `s1` and `s2` ti contain string 1 & 2 or default.
  var s1 = str1 || '';
  var s2 = str2 || '';
  // Their lengths.
  var s1Length, s2Length;
  // Loop index variables.
  var i, j;
  // For deletion & insertion check.
  var above, left;
  // A character code from s1 (temp var).
  var chs1;
  // The levenshtein distance.
  var distance;
  if ( s1 === s2 ) {
    // If they are equal means 0-distance.
    return 0;
  } else if ( s1.length > s2.length ) {
           // Otherwise ensure `s2` contains the longer string.
           i = s1;
           s1 = s2;
           s2 = i;
         }
  // Their lengths;
  s1Length = s1.length;
  s2Length = s2.length;
  // Only need to check for s1's length being equal to 0, as s1 is smaller.
  if ( s1Length === 0 ) return s2Length;

  i = 0;
  while ( i < s2Length ) {
    // Cache char codes of the longer string.
    ccc[ i ] = s2.charCodeAt( i );
    // Initialize `col`.
    col[ i ] = ( i += 1 );
  }
  // Distance computation loops.
  i = 0;

  while ( i < s1Length ) {
    chs1 = s1.charCodeAt( i );
    left = distance = i;
    j = 0;
    while ( j < s2Length ) {
      above = ( chs1 === ccc[ j ] ) ? left : left + 1;
      left = col[ j ];
      col[ j ] = distance = ( left > distance ) ?
        ( above > distance ) ? distance + 1 : above :
          ( above > left ) ? left + 1 : above;
      j += 1;
    }
    i += 1;
  }
  // Return the distance.
  return distance;
}; // levenshtein()

module.exports = levenshtein;
