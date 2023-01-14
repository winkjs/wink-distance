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
var jaroWinkler = require( '../src/wink-distance.js' ).string.jaroWinkler;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'string-jaro normal behaviour', function () {
  var tests = [
    { whenInputIs: { str1: 'SHACKLEFORD', str2: 'SHACKELFORD' }, expectedOutputIs: 0.018 },
    { whenInputIs: { str1: 'DUNNINGHAM', str2: 'CUNNIGHAM' }, expectedOutputIs: 0.104 },
    { whenInputIs: { str1: 'JONES', str2: 'JOHNSON' }, expectedOutputIs: 0.168 },
    { whenInputIs: { str1: 'MASSEY', str2: 'MASSIE' }, expectedOutputIs: 0.067 },
    { whenInputIs: { str1: 'ABROMS', str2: 'ABRAMS' }, expectedOutputIs: 0.078 },
    { whenInputIs: { str1: 'DWAYNE', str2: 'DUANE' }, expectedOutputIs: 0.160 },
    { whenInputIs: { str1: 'SEAN', str2: 'SUSAN' }, expectedOutputIs: 0.195 },
    { whenInputIs: { str1: 'MICHELLE', str2: 'MICHAEL' }, expectedOutputIs: 0.079 },
    { whenInputIs: { str1: 'MARHTA', str2: 'MARTHA' }, expectedOutputIs: 0.039 },
    { whenInputIs: { str1: 'TANYA', str2: 'TONYA' }, expectedOutputIs: 0.120 },
    { whenInputIs: { str1: 'sat', str2: 'urn' }, expectedOutputIs: 1 },
    { whenInputIs: { str1: 'saturn', str2: 'saturn' }, expectedOutputIs: 0 },
    { whenInputIs: { str1: '', str2: '' }, expectedOutputIs: 0 },
  ];

  tests.forEach( function ( test ) {
    it( 'should return ' + JSON.stringify( test.expectedOutputIs ) + ' if the input is ' + JSON.stringify( test.whenInputIs ), function () {
      expect( +jaroWinkler( test.whenInputIs.str1, test.whenInputIs.str2 ).toFixed( 3 ) ).to.equal( test.expectedOutputIs );
    } );
  } );
} );

describe( 'string-jaro with boosting & scaling factor behaviour with MARTHA & MARhTA', function () {
  it( 'should return 0.022 if the input is 0.3 & 0.2 ', function () {
    expect( +jaroWinkler( 'MARHTA', 'MARTHA', 0.3, 0.2 ).toFixed( 3 ) ).to.equal( 0.022 );
  } );
  // Jaro distance between these two strings is 0.056!
  it( 'should return 0.056 if the input is 0.055, 0.2', function () {
    expect( +jaroWinkler( 'MARHTA', 'MARTHA', 0.055, 0.2 ).toFixed( 3 ) ).to.equal( 0.056 );
  } );
} );
