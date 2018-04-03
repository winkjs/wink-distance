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
var taxicab = require( '../src/wink-distance.js' ).vector.taxicab;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'vector-taxicab normal behaviour', function () {
  var tests = [
    // Vectors.
    { whenInputIs: { a: [ 0, 0 ], b: [ 6, 6 ] }, expectedOutputIs: 12 },
    { whenInputIs: { a: [ 1.1, 2.2 ], b: [ 6.2, 6.3 ] }, expectedOutputIs: 9.2 },
    { whenInputIs: { a: [ 1, 1, 1 ], b: [ 1, 1, 1 ] }, expectedOutputIs: 0 },
    { whenInputIs: { a: [ 6.1, 9.1, 3.1 ], b: [ 8.3, 9.8, 4.4 ] }, expectedOutputIs: 4.2 },
    // Both are empty!
    { whenInputIs: { a: [ ], b: [ ] }, expectedOutputIs: 0 },
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +taxicab( test.whenInputIs.a, test.whenInputIs.b ).toFixed( 4 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );

describe( 'vector-taxicab error behaviour', function () {
  var tests = [
    { whenInputIs: { a: [ 0, 0 ], b: [ 6, 6, 1 ] }, expectedOutputIs: 'throw error' },
    { whenInputIs: { a: [ 0, 0, 1 ], b: [ 6, 6 ] }, expectedOutputIs: 'throw error' },
  ];

  tests.forEach( function ( test ) {
    it( 'should ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( taxicab.bind( null, test.whenInputIs.a, test.whenInputIs.b ) ).to.throw( 'wink-distance: taxicab requires identical lenght input vectors.' );
    } );
  } );
} );
