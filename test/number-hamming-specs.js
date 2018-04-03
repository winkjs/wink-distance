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
var hamming = require( '../src/wink-distance.js' ).number.hamming;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'string-hamming normal behaviour', function () {
  var tests = [
    { whenInputIs: { na: 8, nb: 8 }, expectedOutputIs: 0 },
    { whenInputIs: { na: 8, nb: 15 }, expectedOutputIs: 3 },
    { whenInputIs: { na: 9, nb: 15 }, expectedOutputIs: 2 }
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( hamming( test.whenInputIs.na, test.whenInputIs.nb ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );
