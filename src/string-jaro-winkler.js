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

var jaro = require( './string-jaro.js' );
// ## string

// ### jaro
/**
 *
 * Computes the jaro winkler distance between two strings. This distance,
 * controlled by the `scalingFactor`, is always between 0 and 1.
 *
 * @name string.jaroWinkler
 * @param {string} str1 — first string.
 * @param {string} str2 — second string.
 * @param {number} [boostThreshold=0.3] — beyond which scaling is applied: it is
 * applied only if the jaro distance between the input strings is less than or
 * equal to this value. Any value > 1, is capped at 1 automatically.
 * @param {number} [scalingFactor=0.1] — is used to scale the distance.
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
