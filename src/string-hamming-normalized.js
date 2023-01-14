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

// ## string

// ### hammingNormalized
/**
 *
 * Computes the normalized hamming distance between two strings. These strings
 * may be of different lengths. Normalized distance is always between 0 and 1.
 *
 * @method string.hammingNormalized
 * @param {string} str1 first string.
 * @param {string} str2 second string.
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
