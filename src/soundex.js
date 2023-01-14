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
// Soundex Code for alphabets.
/* eslint-disable object-property-newline */
var soundexMap = {
  A: 0, E: 0, I: 0, O: 0, U: 0, Y: 0,
  B: 1, F: 1, P: 1, V: 1,
  C: 2, G: 2, J: 2, K: 2, Q: 2, S: 2, X: 2, Z: 2,
  D: 3, T: 3,
  L: 4,
  M: 5, N: 5,
  R: 6
};

// ## string

// ### soundex
/**
 *
 * Produces the soundex code from the input `word`.
 *
 * @private
 * @param {string} word the input word.
 * @param {number} [maxLength=4] of soundex code to be returned.
 * @return {string} soundex code of `word`.
 * @example
 * soundex( 'Burroughs' );
 * // -> 'B620'
 * soundex( 'Burrows' );
 * // -> 'B620'
 */
var soundex = function ( word, maxLength ) {
  // Upper case right in the begining.
  var s = ( word.length ) ? word.toUpperCase() : '?';
  var i,
      imax = s.length;
  // Soundex code builds here.
  var sound = [];
  // Helpers - `ch` is a char from `s` and `code/prevCode` are sondex codes
  // for consonants.
  var ch, code,
      prevCode = 9;
  // Use default of 4.
  var maxLen = maxLength || 4;
  // Iterate through every character.
  for ( i = 0; i < imax; i += 1 ) {
    ch = s[ i ];
    code = soundexMap[ ch ];
    if ( i ) {
      // Means i is > 0.
      // `code` is either (a) `undefined` if an unknown character is
      // encountered including `h & w`, or (b) `0` if it is vowel, or
      // (c) the soundex code for a consonant.
      if ( code && code !== prevCode ) {
        // Consonant and not adjecant duplicates!
        sound.push( code );
      } else if ( code !== 0 ) {
        // Means `h or w` or an unknown character: ensure `prevCode` is
        // remembered so that adjecant duplicates can be handled!
        code = prevCode;
      }
    } else {
      // Retain the first letter
      sound.push( ch );
    }
    prevCode = code;
  }
  s = sound.join( '' );
  // Always ensure minimum length of 4 characters for maxLength > 4.
  if ( s.length < 4 ) s += '000';
  // Return the required length.
  return s.substr( 0, maxLen );
}; // soundex()

module.exports = soundex;
