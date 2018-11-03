//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
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
var soundex = require( '../src/soundex.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;
// ### Soundex test cases.

describe( 'core soundex()', function () {
  var tests = [
    { whenInputIs: 'Example', expectedOutputIs: 'E251' },
    { whenInputIs: 'Sownteks', expectedOutputIs: 'S532' },
    { whenInputIs: 'Lloyd', expectedOutputIs: 'L300' },
    { whenInputIs: '12346', expectedOutputIs: '1000' },
    { whenInputIs: 'Ashcraft', expectedOutputIs: 'A261' },
    { whenInputIs: 'Ashcroft', expectedOutputIs: 'A261' },
    { whenInputIs: 'auerbach', expectedOutputIs: 'A612' },
    { whenInputIs: 'bar', expectedOutputIs: 'B600' },
    { whenInputIs: 'barre', expectedOutputIs: 'B600' },
    { whenInputIs: 'Baragwanath', expectedOutputIs: 'B625' },
    { whenInputIs: 'Burroughs', expectedOutputIs: 'B620' },
    { whenInputIs: 'Burrows', expectedOutputIs: 'B620' },
    { whenInputIs: 'C.I.A.', expectedOutputIs: 'C000' },
    { whenInputIs: 'coöp', expectedOutputIs: 'C100' },
    { whenInputIs: 'D-day', expectedOutputIs: 'D000' },
    { whenInputIs: 'd jay', expectedOutputIs: 'D200' },
    { whenInputIs: 'de la Rosa', expectedOutputIs: 'D462' },
    { whenInputIs: 'Donnell', expectedOutputIs: 'D540' },
    { whenInputIs: 'Dracula', expectedOutputIs: 'D624' },
    { whenInputIs: 'Drakula', expectedOutputIs: 'D624' },
    { whenInputIs: 'Du Pont', expectedOutputIs: 'D153' },
    { whenInputIs: 'Ekzampul', expectedOutputIs: 'E251' },
    { whenInputIs: 'example', expectedOutputIs: 'E251' },
    { whenInputIs: 'Ellery', expectedOutputIs: 'E460' },
    { whenInputIs: 'Euler', expectedOutputIs: 'E460' },
    { whenInputIs: 'F.B.I.', expectedOutputIs: 'F000' },
    { whenInputIs: 'Gauss', expectedOutputIs: 'G200' },
    { whenInputIs: 'Ghosh', expectedOutputIs: 'G200' },
    { whenInputIs: 'Gutierrez', expectedOutputIs: 'G362' },
    { whenInputIs: 'he', expectedOutputIs: 'H000' },
    { whenInputIs: 'Heilbronn', expectedOutputIs: 'H416' },
    { whenInputIs: 'Hilbert', expectedOutputIs: 'H416' },
    { whenInputIs: 'Jackson', expectedOutputIs: 'J250' },
    { whenInputIs: 'Johnny', expectedOutputIs: 'J500' },
    { whenInputIs: 'Jonny', expectedOutputIs: 'J500' },
    { whenInputIs: 'Kant', expectedOutputIs: 'K530' },
    { whenInputIs: 'Knuth', expectedOutputIs: 'K530' },
    { whenInputIs: 'Ladd', expectedOutputIs: 'L300' },
    { whenInputIs: 'Lloyd', expectedOutputIs: 'L300' },
    { whenInputIs: 'Lee', expectedOutputIs: 'L000' },
    { whenInputIs: 'Lissajous', expectedOutputIs: 'L222' },
    { whenInputIs: 'Lukasiewicz', expectedOutputIs: 'L222' },
    { whenInputIs: 'naïve', expectedOutputIs: 'N100' },
    { whenInputIs: 'Miller', expectedOutputIs: 'M460' },
    { whenInputIs: 'Moses', expectedOutputIs: 'M220' },
    { whenInputIs: 'Moskowitz', expectedOutputIs: 'M232' },
    { whenInputIs: 'Moskovitz', expectedOutputIs: 'M213' },
    { whenInputIs: 'O\'Conner', expectedOutputIs: 'O256' },
    { whenInputIs: 'O\'Connor', expectedOutputIs: 'O256' },
    { whenInputIs: 'O\'Hara', expectedOutputIs: 'O600' },
    { whenInputIs: 'O\'Mally', expectedOutputIs: 'O540' },
    { whenInputIs: 'Peters', expectedOutputIs: 'P362' },
    { whenInputIs: 'Peterson', expectedOutputIs: 'P362' },
    { whenInputIs: 'Pfister', expectedOutputIs: 'P236' },
    { whenInputIs: 'R2-D2', expectedOutputIs: 'R300' },
    { whenInputIs: 'rÄ≈sumÅ∙', expectedOutputIs: 'R250' },
    { whenInputIs: 'Robert', expectedOutputIs: 'R163' },
    { whenInputIs: 'Rupert', expectedOutputIs: 'R163' },
    { whenInputIs: 'Rubin', expectedOutputIs: 'R150' },
    { whenInputIs: 'Soundex', expectedOutputIs: 'S532' },
    { whenInputIs: 'sownteks', expectedOutputIs: 'S532' },
    { whenInputIs: 'Swhgler', expectedOutputIs: 'S460' },
    { whenInputIs: 'Tymczak', expectedOutputIs: 'T522' },
    { whenInputIs: 'Uhrbach', expectedOutputIs: 'U612' },
    { whenInputIs: 'Van de Graaff', expectedOutputIs: 'V532' },
    { whenInputIs: 'VanDeusen', expectedOutputIs: 'V532' },
    { whenInputIs: 'Washington', expectedOutputIs: 'W252' },
    { whenInputIs: 'Wheaton', expectedOutputIs: 'W350' },
    { whenInputIs: 'Williams', expectedOutputIs: 'W452' },
    { whenInputIs: 'Woolcock', expectedOutputIs: 'W422' },
    { whenInputIs: '', expectedOutputIs: '?000' }
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( soundex( test.whenInputIs ) ).to.deep.equal( test.expectedOutputIs );
      expect( soundex( test.whenInputIs, 4 ) ).to.deep.equal( test.expectedOutputIs );
    } );
  } );
} );
