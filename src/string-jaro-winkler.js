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

var jaro = require( './string-jaro.js' );
// ## string

// ### jaro
/**
 *
 * Computes the jaro winkler distance between two strings. This distance,
 * controlled by the `scalingFactor`, is always between 0 and 1.
 *
 * @method string.jaroWinkler
 * @param {string} str1 first string.
 * @param {string} str2 second string.
 * @param {number} [boostThreshold=0.3] beyond which scaling is applied: it is
 * applied only if the jaro distance between the input strings is less than or
 * equal to this value. Any value > 1, is capped at 1 automatically.
 * @param {number} [scalingFactor=0.1] is used to scale the distance.
 * Such scaling, if applied, is proportional to the number of shared
 * consecutive characters from the first character of `str1` and `str2`.
 * Any value > 0.25, is capped at 0.25 automatically.
 * @return {number} jaro winkler distance between `str1` and `str2`.
 * @example
 * jaroWinkler( 'martha', 'marhta' );
 * // ->  0.03888888888888883
 * jaroWinkler( 'martha', 'marhta', 0.3, 0.2 );
 * // -> 0.022222222222222185
 * jaroWinkler( 'duane', 'dwayne' );
 * // -> .15999999999999992
 */
var jaroWinkler = function ( str1, str2, boostThreshold, scalingFactor ) {
   // Early exit!
   if ( str1 === str2 ) return 0;
   // Setup default values if undefined.
   var sf = ( scalingFactor === undefined ) ? 0.1 : scalingFactor;
   var bt = ( boostThreshold === undefined ) ? 0.3 : boostThreshold;
   // Fix scaling factor & boost threshold, if required.
   sf = Math.min( Math.abs( sf ), 0.25 );
   bt = Math.min( Math.abs( bt ), 1 );

   var distance = jaro( str1, str2 );

   if ( distance > bt ) return distance;

   var pLimit = Math.min( str1.length, str2.length, 4 );
   var l = 0;

   for ( var i = 0; i < pLimit; i += 1 ) {
     if ( str1[ i ] === str2[ i ] ) {
       l += 1;
     } else {
       break;
     }
   }

   distance -= ( l * sf * distance );

   return distance;
 }; // jaroWinkler()

module.exports = jaroWinkler;
