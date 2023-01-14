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

var jaro = require( 'wink-jaro-distance' );
// ## string

// ### jaro
/**
 *
 * Computes the jaro distance between two strings. This distance is always
 * between 0 and 1.
 *
 * @method string.jaro
 * @param {string} str1 first string.
 * @param {string} str2 second string.
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
