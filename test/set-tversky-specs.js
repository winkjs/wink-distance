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
var chai = require( 'chai' );
var mocha = require( 'mocha' );
var tversky = require( '../src/wink-distance.js' ).set.tversky;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'set-tversky normal behaviour', function () {
  var tests = [
    // Some similarity.
    { whenInputIs: [ new Set(':-)'), new Set(':p'), 1, 0 ], expectedOutputIs: 0.6667 },
    { whenInputIs: [ new Set(':-)'), new Set(':p'), 0.75, 0.25 ], expectedOutputIs: 0.6364 },
    { whenInputIs: [ new Set(':-)'), new Set(':p'), 0.5, 0.5 ], expectedOutputIs: 0.6 },
    { whenInputIs: [ new Set(':p'), new Set(':-)') ], expectedOutputIs: 0.6 },
    { whenInputIs: [ new Set(':-)'), new Set(':p'), 0.25, 0.75 ], expectedOutputIs: 0.5556 },
    { whenInputIs: [ new Set(':-)'), new Set(':p'), 0, 1 ], expectedOutputIs: 0.5 },
    // Identical.
    { whenInputIs: [ new Set(':-)'), new Set(':-)'), 1, 0 ], expectedOutputIs: 0 },
    { whenInputIs: [ new Set(':-)'), new Set(':-)'), 0.75, 0.25 ], expectedOutputIs: 0 },
    // No similarity.
    { whenInputIs: [ new Set(':)'), new Set('^_^'), 1, 0 ], expectedOutputIs: 1 },
    { whenInputIs: [ new Set(':)'), new Set('^_^') ], expectedOutputIs: 1 },
    { whenInputIs: [ new Set(':)'), new Set('^_^'), 0, 1 ], expectedOutputIs: 1 },
    // One of them is empty.
    { whenInputIs: [ new Set( ':-)' ), new Set( '' ) ], expectedOutputIs: 1 },
    // // Other one is empty.
    { whenInputIs: [ new Set( '' ), new Set( ':-)' ) ], expectedOutputIs: 1 },
    // Both are empty!
    { whenInputIs: [ new Set( '' ), new Set( '' ) ], expectedOutputIs: 0 },
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +tversky( ...test.whenInputIs ).toFixed( 4 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );

describe( 'set-tversky error behaviour', function () {
  var tests = [
    { whenInputIs: [ new Set(':-)'), new Set(':p'), -1, 0 ], expectedOutputIs: 'throw error' },
    { whenInputIs: [ new Set(':-)'), new Set(':p'), 0, -1 ], expectedOutputIs: 'throw error' },
    { whenInputIs: [ new Set(':-)'), new Set(':p'), -1, -1 ], expectedOutputIs: 'throw error' },
    { whenInputIs: [ new Set(':-)'), new Set(':p'), 'x', [] ], expectedOutputIs: 'throw error' },
  ];

  tests.forEach( function ( test ) {
    it( 'should ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( tversky.bind( null, ...test.whenInputIs ) ).to.throw( 'wink-distance: tversky requires aplha & beta to be positive numbers.' );
    } );
  } );
} );
