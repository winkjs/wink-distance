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

// ### hamming
/**
 *
 * Computes the hamming distance between two strings of identical length.
 * This distance is always `>= 0`.
 *
 * @method string.hamming
 * @param {string} str1 first string.
 * @param {string} str2 second string.
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
