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

/* eslint-disable no-bitwise */

// ## vector

// ### chebyshev
/**
 *
 * Computes the chebyshev or manhattan distance between two vectors of identical
 * length.
 *
 * @method vector.chebyshev
 * @param {number} va the first vector.
 * @param {number} vb the second vector.
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
