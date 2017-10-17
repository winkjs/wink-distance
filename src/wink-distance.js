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

var wd = Object.create( null );

// BOW name space.
wd.bow = Object.create( null );
// Number name space.
wd.number = Object.create( null );
// Set name space.
wd.set = Object.create( null );
// String name space.
wd.string = Object.create( null );
// Vector name space.
wd.vector = Object.create( null );


// BOW name space.
// 1. cosine
wd.bow.cosine = require( './bow-cosine.js' );

// Number name space.
// 1. hamming
wd.number.hamming = require( './number-hamming.js' );

// Set name space.
// 1. jaccard
wd.set.jaccard = require( './set-jaccard.js' );
// 2. tversky
wd.set.tversky = require( './set-tversky.js' );

// String name space.
// 1. hamming
wd.string.hamming = require( './string-hamming.js' );
// 2. hammingNormalized
wd.string.hammingNormalized = require( './string-hamming-normalized.js' );
// 3. jaro
wd.string.jaro = require( './string-jaro.js' );
// 4. jaroWinkler
wd.string.jaroWinkler = require( './string-jaro-winkler.js' );
// 5. soundex
wd.string.soundex = require( './string-soundex.js' );

// Vector name space.
// 1. taxicab
wd.vector.taxicab = require( './vector-taxicab.js' );
// Create an alias.
wd.vector.manhattan = require( './vector-taxicab.js' );
// 2. chebyshev
wd.vector.chebyshev = require( './vector-chebyshev.js' );


module.exports = wd;
