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

var soundex = require( './soundex.js' );
// ## string

// ### soundex
/**
 *
 * Computes the soundex distance between two strings. This distance is either
 * 1 indicating phonetic similarity or 0 indicating no similarity.
 *
 * @method string.soundex
 * @param {string} str1 first string.
 * @param {string} str2 second string.
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
