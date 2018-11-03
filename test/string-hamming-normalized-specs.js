//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
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
var chai = require( 'chai' );
var mocha = require( 'mocha' );
var hammingNormalized = require( '../src/wink-distance.js' ).string.hammingNormalized;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'string-hamming-normalized normal behaviour', function () {
  var tests = [
    // Some similarity, equal length.
    { whenInputIs: { str1: 'summer', str2: 'samuel' }, expectedOutputIs: 0.5 },
    // Some similarity, different length.
    { whenInputIs: { str1: 'john', str2: 'johny' }, expectedOutputIs: 0.2 },
    // Same as above, sequence swapped.
    { whenInputIs: { str1: 'johny', str2: 'john' }, expectedOutputIs: 0.2 },
    // Similarity at start.
    { whenInputIs: { str1: 'sat', str2: 'saturn' }, expectedOutputIs: 0.5 },
    // Identical.
    { whenInputIs: { str1: 'john', str2: 'john' }, expectedOutputIs: 0 },
    // No similarity.
    { whenInputIs: { str1: 'sat', str2: 'urn' }, expectedOutputIs: 1 },
    { whenInputIs: { str1: 'saturn', str2: 'urn' }, expectedOutputIs: 1 },
    // One of them is empty.
    { whenInputIs: { str1: '', str2: 'urn' }, expectedOutputIs: 1 },
    // Other one is empty.
    { whenInputIs: { str1: 'sat', str2: '' }, expectedOutputIs: 1 },
    // Both are empty!
    { whenInputIs: { str1: '', str2: '' }, expectedOutputIs: 0 }
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +hammingNormalized( test.whenInputIs.str1, test.whenInputIs.str2 ).toFixed( 4 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );
