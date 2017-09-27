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

//
var chai = require( 'chai' );
var mocha = require( 'mocha' );
var jaccard = require( '../src/set-jaccard.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'set-jaccard normal behaviour', function () {
  var tests = [
    // Some similarity.
    { whenInputIs: { a: [ ':', '-', ')' ], b: [ ':', '-', '|' ] }, expectedOutputIs: 0.5 },
    { whenInputIs: { a: [ 0, 1, 2, 5, 6 ], b: [ 0, 2, 3, 4, 5, 7, 9 ] }, expectedOutputIs: 0.6667 },
    // Identical.
    { whenInputIs: { a: [ ':', '-', ')' ], b: [ ':', '-', ')' ] }, expectedOutputIs: 0 },
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
      expect( +jaccard( new Set( test.whenInputIs.a ), new Set( test.whenInputIs.b ) ).toFixed( 4 ) ).to.deep.equal( test.expectedOutputIs );
    } );
  } );
} );
