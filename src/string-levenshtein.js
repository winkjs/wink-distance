//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) GRAYPE Systems Private Limited
//
//     This file is part of “wink-distance”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

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
 * @method string.levenshtein
 * @param {string} str1 first string.
 * @param {string} str2 second string.
 * @return {number} levenshtein distance between `str1` and `str2`.
 * @example
 * levenshtein( 'example', 'sample' );
 * // ->  2
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
