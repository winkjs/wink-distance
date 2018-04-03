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
var levenshtein = require( '../src/wink-distance.js' ).string.levenshtein;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'string-jaro normal behaviour', function () {
  const tests = [
      // handle undefined & null inputs:
      [ undefined, undefined, 0 ],
      [ null, null, 0 ],
      [ undefined, null, 0 ],
      [ undefined, 'test', 4 ],
      // handle empty strings:
      [ '', '', 0 ],
      [ 'a', '', 1 ],
      [ '', 'a', 1 ],
      [ 'abc', '', 3 ],
      [ '', 'abc', 3 ],
      // handle equal strings:
      [ 'a', 'a', 0 ],
      [ 'abc', 'abc', 0 ],
      // handle inserts:
      [ 'a',  '', 1 ],
      [ 'ab',   'a', 1 ],
      [ 'ab', 'b', 1 ],
      [ 'abcdefg', 'xabxcdxxefxgx', 6 ],
      // handle deletes:
      [ 'ab',  'a', 1 ],
      [ 'ab',   'ac', 1 ],
      [ 'abc', 'ac', 1 ],
      [ 'xabxcdxxefxgx', 'abcdefg', 6 ],
      // handle substitutions:
      [ 'a', 'b', 1 ],
      [ 'ab', 'ac', 1 ],
      [ 'ac', 'bc', 1 ],
      [ 'abc', 'axc', 1 ],
      [ 'xabxcdxxefxgx', '1ab2cd34ef5g6', 6 ],
      // handle insertion/deletion/substitutions together:
      [ 'example', 'samples', 3 ],
      [ 'say', 'shiver', 5 ],
      [ 'sturgeon', 'urgently', 6 ],
      [ 'levenshtein', 'frankenstein', 6 ],
      [ 'distance', 'difference', 5 ],
      [ 'java was neat', 'javascript is best', 10 ],
  ];
  const whenInput1Is = 0;
  const whenInput2Is = 1;
  const expectedOutputIs = 2;

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test[ expectedOutputIs ] ) + ' if the input is ' + JSON.stringify( test.slice( 0, 2 ) ), function () {
      expect( levenshtein( test[ whenInput1Is ], test[ whenInput2Is ] ) ).to.equal( test[ expectedOutputIs ] );
    } );
  } );
} );
