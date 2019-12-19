"use strict";
const rgbToHex = require('../');
console.log(rgbToHex.toString());
console.log('rgbToHex(0, 0, 0) =>', rgbToHex(0, 0, 0));
console.log('rgbToHex(50, 128, 200) =>', rgbToHex(50, 128, 200));
console.log('rgbToHex(255, 255, 255) =>', rgbToHex(255, 255, 255));
console.log('rgbToHex(-100, "abc", 300) =>', rgbToHex(-100, "abc", 300));
