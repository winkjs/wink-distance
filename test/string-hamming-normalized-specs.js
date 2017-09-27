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
var hammingNormalized = require( '../src/wink-distance.js' ).string.hammingNormalized;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'string-hamming-normalized normal behaviour', function () {
  var tests = [
    // Some similarity, equal length.
    { whenInputIs: { str1: 'summer', str2: 'samuel' }, expectedOutputIs: 0.5 },
    // Some similarity, different length.
    { whenInputIs: { str1: 'john', str2: 'johny' }, expectedOutputIs: 0.2 },
    // Same as above, sequence swapped.
    { whenInputIs: { str1: 'johny', str2: 'john' }, expectedOutputIs: 0.2 },
    // Similarity at start.
    { whenInputIs: { str1: 'sat', str2: 'saturn' }, expectedOutputIs: 0.5 },
    // Identical.
    { whenInputIs: { str1: 'john', str2: 'john' }, expectedOutputIs: 0 },
    // No similarity.
    { whenInputIs: { str1: 'sat', str2: 'urn' }, expectedOutputIs: 1 },
    { whenInputIs: { str1: 'saturn', str2: 'urn' }, expectedOutputIs: 1 },
    // One of them is empty.
    { whenInputIs: { str1: '', str2: 'urn' }, expectedOutputIs: 1 },
    // Other one is empty.
    { whenInputIs: { str1: 'sat', str2: '' }, expectedOutputIs: 1 },
    // Both are empty!
    { whenInputIs: { str1: '', str2: '' }, expectedOutputIs: 0 }
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +hammingNormalized( test.whenInputIs.str1, test.whenInputIs.str2 ).toFixed( 4 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );
