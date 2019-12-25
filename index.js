"use strict";
module.exports = (r = 255, g = 255, b = 255) => {
  let result = "";
  const validateOctet = (value) => {
    const MAX_VALUE = 255;
    const MIN_VALUE = 0;
    value = (+value || 0);
    value = value < MIN_VALUE ? MIN_VALUE : value
    value = value > MAX_VALUE ? MAX_VALUE : value
    return value
  };
  const octetToHex = (value) => {
    value = value.toString(16).toLowerCase();
    return value.length < 2 ? concat('0', value) : value;
  };

  r = validateOctet(r);
  g = validateOctet(g);
  b = validateOctet(b);

  result = `#${octetToHex(r)}${octetToHex(g)}${octetToHex(b)}`;
  return result;
};
