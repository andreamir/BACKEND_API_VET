/* eslint-disable no-import-assign */
import romanParseator from './romaneNumbers.js';
import * as parseators from './parseators.js';

function decimalToRomanMock({ splittedNumber }) {
  const joinedNumber = splittedNumber.join('');
  if (joinedNumber === '1') {
    return 'I';
  }
  if (joinedNumber === '2') {
    return 'II';
  }
  if (joinedNumber === '4') {
    return 'IV';
  }
  return '?';
}

function romanToDecimalMock({ splittedNumber }) {
  const joinedNumber = splittedNumber.join('');
  if (joinedNumber === 'I') {
    return 1;
  }
  if (joinedNumber === 'II') {
    return 2;
  }
  if (joinedNumber === 'IV') {
    return 4;
  }
  return '?';
}

beforeAll(() => {
  parseators.decimalToRoman = jest.fn().mockImplementation(decimalToRomanMock);
  parseators.romanToDecimal = jest.fn().mockImplementation(romanToDecimalMock);
});

describe('Params validation tests', () => {
  test('Argument undefined', () => {
    try {
      romanParseator();
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(0);
      expect(parsedMessage.msg).toBe('The argument must be an object that contains the numberAsString property');
    }
  });
  test('Argument with empty object', () => {
    try {
      romanParseator({});
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(1);
      expect(parsedMessage.msg).toBe('The argument must be an object that contains the numberAsString property');
    }
  });
  test('numberAsString isnt a string but an a number', () => {
    try {
      romanParseator({ numberAsString: 1 });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(2);
      expect(parsedMessage.msg).toBe('The numberAsString property must be a string');
    }
  });
  test('number higher than 3999', () => {
    try {
      romanParseator({ numberAsString: '4000' });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(4);
      expect(parsedMessage.msg).toBe('The number cannot be bigger than 3999');
    }
  });
});

describe('romanToDecimal tests', () => {
  test('Passing "I" and returning 1', () => {
    const decimal = romanParseator({ numberAsString: 'I' });
    expect(decimal).toBe(1);
  });

  test('Passing "IV" and returning 4', () => {
    const decimal = romanParseator({ numberAsString: 'IV' });
    expect(decimal).toBe(4);
  });
});

describe('decimalToRoman tests', () => {
  test('Passing 1 and returning "I"', () => {
    const decimal = romanParseator({ numberAsString: '1' });
    expect(decimal).toBe('I');
  });
  test('Passing 2 and returning "II"', () => {
    const decimal = romanParseator({ numberAsString: '2' });
    expect(decimal).toBe('II');
  });
  test('Passing 4 and returning "IV"', () => {
    const decimal = romanParseator({ numberAsString: '4' });
    expect(parseators.romanToDecimal).toHaveBeenCalled(); // comprobación de entrada en funcion
    const params = { romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'], splittedNumber: ['4'] };
    expect(parseators.decimalToRoman).toHaveBeenCalledWith(params);
    expect(decimal).toBe('IV');
  });
});
