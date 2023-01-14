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

var wd = Object.create( null );

/**
 * BOW
 * @namespace bow
 */
wd.bow = Object.create( null );

/**
 * Number
 * @namespace number
 */

wd.number = Object.create( null );

/**
 * Set
 * @namespace set
 */
wd.set = Object.create( null );

/**
 * String
 * @namespace string
 */
wd.string = Object.create( null );

/**
 * Vector
 * @namespace vector
 */
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
// 5. levenshtein
wd.string.levenshtein = require( './string-levenshtein.js' );
// 6. soundex
wd.string.soundex = require( './string-soundex.js' );

// Vector name space.
// 1. taxicab
wd.vector.taxicab = require( './vector-taxicab.js' );
// Create an alias.
wd.vector.manhattan = require( './vector-taxicab.js' );
// 2. chebyshev
wd.vector.chebyshev = require( './vector-chebyshev.js' );


module.exports = wd;
