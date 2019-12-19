"use strict";
const rgbToHex = require('../');
var assert = require("assert")
describe('#rgbToHex()', function(){
  it('should return #FFFFFF when no parameters are passed', function(){
    assert.equal('#FFFFFF', rgbToHex());
  })
  it('should return #FFFFFF when the parameters are undefined', function(){
    assert.equal('#FFFFFF', rgbToHex(undefined, undefined, undefined));
  })
  it('should return #000000 when the parameters are NaN', function(){
    assert.equal('#000000', rgbToHex(NaN, NaN, NaN));
  })
  it('should return #000000 when the parameters are strings', function(){
    assert.equal('#000000', rgbToHex('s', 't', 'r'));
  })
  it('should return #010203 when the parameters are less than 10 and there are more than three of them', function(){
    assert.equal('#010203', rgbToHex(1, 2, 3, 4, 5));
  })
  it('should return #0A64C8 when the parameters 10, 100 and 200', function(){
    assert.equal('#0A64C8', rgbToHex(10, 100, 200));
  })
  it('should return #0064FF when the parameters -100, 100 and 300 are out of range', function(){
    assert.equal('#0064FF', rgbToHex(-100, 100, 300));
  })
})
