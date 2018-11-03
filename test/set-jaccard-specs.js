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
var jaccard = require( '../src/wink-distance.js' ).set.jaccard;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'set-jaccard normal behaviour', function () {
  var tests = [
    // Some similarity.
    { whenInputIs: { a: ':-)', b: ':-(' }, expectedOutputIs: 0.5 },
    { whenInputIs: { a: [ 0, 1, 2, 5, 6 ], b: [ 0, 2, 3, 4, 5, 7, 9 ] }, expectedOutputIs: 0.6667 },
    // Identical.
    { whenInputIs: { a: ':-)', b: ':-)' }, expectedOutputIs: 0 },
    // No similarity.
    { whenInputIs: { a: [ 1, 2, 3, 4 ], b: [ 9, 8, 7, 6 ] }, expectedOutputIs: 1 },
    // One of them is empty.
    { whenInputIs: { a: [ 1, 2, 3, 4 ], b: [ ] }, expectedOutputIs: 1 },
    // Other one is empty.
    { whenInputIs: { a: [ ], b: [ 9, 8, 7, 6 ] }, expectedOutputIs: 1 },
    // Both are empty!
    { whenInputIs: { a: [ ], b: [ ] }, expectedOutputIs: 0 },
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +jaccard( new Set( test.whenInputIs.a ), new Set( test.whenInputIs.b ) ).toFixed( 4 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );
