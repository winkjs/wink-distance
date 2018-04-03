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
var cosine = require( '../src/wink-distance.js' ).bow.cosine;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'bow-cosine normal behaviour', function () {
  var tests = [
    // Some similarity.
    { whenInputIs: { a: { the: 2, dog: 1, chased: 1, cat: 1 }, b: { the: 2, cat: 1, chased: 1, mouse: 1 } }, expectedOutputIs: 0.1429 },
    { whenInputIs: { a: { chased: 1, cat: 1 }, b: { chased: 1 } }, expectedOutputIs: 0.2929 },
    // Identical.
    { whenInputIs: { a: { the: 2, dog: 1, chased: 1, cat: 1 }, b: { the: 2, dog: 1, chased: 1, cat: 1 } }, expectedOutputIs: 0 },
    // No similarity.
    { whenInputIs: { a: { lion: 1, killed: 1, goat: 1 }, b: { dog: 1, chased: 1, cat: 1 } }, expectedOutputIs: 1 },
    // One of them is empty.
    { whenInputIs: { a: { }, b: { dog: 1, chased: 1, cat: 1 } }, expectedOutputIs: 1 },
    // Other one is empty.
    { whenInputIs: { a: { dog: 1, chased: 1, cat: 1 }, b: { } }, expectedOutputIs: 1 },
    // Both are empty!
    { whenInputIs: { a: { }, b: { } }, expectedOutputIs: 0 }
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +cosine( test.whenInputIs.a, test.whenInputIs.b ).toFixed( 4 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );
