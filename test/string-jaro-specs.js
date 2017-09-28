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
var jaro = require( '../src/wink-distance.js' ).string.jaro;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'string-jaro normal behaviour', function () {
  var tests = [
    { whenInputIs: { str1: 'john', str2: 'johny' }, expectedOutputIs: 0.0667 },
    { whenInputIs: { str1: 'sam', str2: 'sat' }, expectedOutputIs: 0.2222 },
    { whenInputIs: { str1: 'summer', str2: 'samuel' }, expectedOutputIs: 0.3056 },
    { whenInputIs: { str1: 'sat', str2: 'urn' }, expectedOutputIs: 1 },
    { whenInputIs: { str1: 'saturn', str2: 'saturn' }, expectedOutputIs: 0 },
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +jaro( test.whenInputIs.str1, test.whenInputIs.str2 ).toFixed( 4 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );
