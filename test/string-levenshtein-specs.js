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
