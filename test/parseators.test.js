import { decimalToRoman, romanToDecimal } from './parseators.js';

describe('romanToDecimal tests', () => {
  test('Not a roman letter', () => {
    try {
      romanToDecimal({ splittedNumber: ['W'], romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(3);
      expect(parsedMessage.msg).toBe('The entered number is not valid');
    }
  });
  test('Passing "L" and returning 50', () => {
    const result = romanToDecimal({ splittedNumber: ['L'], romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] });
    expect(result).toBe(50);
  });
  test('Passing "IV" and returning 4', () => {
    const result = romanToDecimal({ splittedNumber: ['I', 'V'], romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] });
    expect(result).toBe(4);
  });
});

describe('decimalToRoman tests', () => {
  test('Passing 14 and returning "XIV"', () => {
    const result = decimalToRoman({ splittedNumber: ['1', '4'], romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] });
    expect(result).toBe('XIV');
  });
  test('Passing 3999 and returning "MMMCMXCIX"', () => {
    const result = decimalToRoman({ splittedNumber: ['3', '9', '9', '9'], romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] });
    expect(result).toBe('MMMCMXCIX');
  });
  test('Passing 5 and returning "V"', () => {
    const result = decimalToRoman({ splittedNumber: ['5'], romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] });
    expect(result).toBe('V');
  });
  test('Passing 7 and returning "VII"', () => {
    const result = decimalToRoman({ splittedNumber: ['7'], romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] });
    expect(result).toBe('VII');
  });
});
