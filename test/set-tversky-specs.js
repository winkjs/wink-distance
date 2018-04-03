//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
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
