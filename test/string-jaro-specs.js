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
var jaro = require( '../src/wink-distance.js' ).string.jaro;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'string-jaro normal behaviour', function () {
  var tests = [
    { whenInputIs: { str1: 'SHACKLEFORD', str2: 'SHACKELFORD' }, expectedOutputIs: 0.030 },
    { whenInputIs: { str1: 'DUNNINGHAM', str2: 'CUNNIGHAM' }, expectedOutputIs: 0.104 },
    { whenInputIs: { str1: 'JONES', str2: 'JOHNSON' }, expectedOutputIs: 0.210 },
    { whenInputIs: { str1: 'MASSEY', str2: 'MASSIE' }, expectedOutputIs: 0.111 },
    { whenInputIs: { str1: 'ABROMS', str2: 'ABRAMS' }, expectedOutputIs: 0.111 },
    { whenInputIs: { str1: 'DWAYNE', str2: 'DUANE' }, expectedOutputIs: 0.178 },
    { whenInputIs: { str1: 'SEAN', str2: 'SUSAN' }, expectedOutputIs: 0.217 },
    { whenInputIs: { str1: 'MICHELLE', str2: 'MICHAEL' }, expectedOutputIs: 0.131 },
    { whenInputIs: { str1: 'MARHTA', str2: 'MARTHA' }, expectedOutputIs: 0.056 },
    { whenInputIs: { str1: 'TANYA', str2: 'TONYA' }, expectedOutputIs: 0.133 },
    { whenInputIs: { str1: 'sat', str2: 'urn' }, expectedOutputIs: 1 },
    { whenInputIs: { str1: 'saturn', str2: 'saturn' }, expectedOutputIs: 0 },
    { whenInputIs: { str1: '', str2: '' }, expectedOutputIs: 0 },
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +jaro( test.whenInputIs.str1, test.whenInputIs.str2 ).toFixed( 3 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );
