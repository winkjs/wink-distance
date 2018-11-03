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
var chebyshev = require( '../src/wink-distance.js' ).vector.chebyshev;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'vector-chebyshev normal behaviour', function () {
  var tests = [
    // Vectors.
    { whenInputIs: { a: [ 0, 0 ], b: [ 6, 6 ] }, expectedOutputIs: 6 },
    { whenInputIs: { a: [ 1.1, 2.2 ], b: [ 6.2, 6.3 ] }, expectedOutputIs: 5.1 },
    { whenInputIs: { a: [ 1, 1, 1 ], b: [ 1, 1, 1 ] }, expectedOutputIs: 0 },
    { whenInputIs: { a: [ 6.1, 9.1, 3.1 ], b: [ 8.3, 9.8, 4.4 ] }, expectedOutputIs: 2.2 },
    // Both are empty!
    { whenInputIs: { a: [ ], b: [ ] }, expectedOutputIs: 0 },
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +chebyshev( test.whenInputIs.a, test.whenInputIs.b ).toFixed( 4 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );

describe( 'vector-chebyshev error behaviour', function () {
  var tests = [
    { whenInputIs: { a: [ 0, 0 ], b: [ 6, 6, 1 ] }, expectedOutputIs: 'throw error' },
    { whenInputIs: { a: [ 0, 0, 1 ], b: [ 6, 6 ] }, expectedOutputIs: 'throw error' },
  ];

  tests.forEach( function ( test ) {
    it( 'should ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( chebyshev.bind( null, test.whenInputIs.a, test.whenInputIs.b ) ).to.throw( 'wink-distance: chebyshev requires identical lenght input vectors.' );
    } );
  } );
} );
