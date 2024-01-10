import romanParseator from './romaneNumbers.js';

const tests = [];

// ---------------------- 1 -------------

function test1() {
  try {
    romanParseator([]);
  } catch (myError) {
    const response = JSON.parse(myError.message);
    const expectedResponse = {
      code: 1,
      msg: 'The argument must be an object that contains the numberAsString property',
    };
    const isCodePassed = response.code === expectedResponse.code;
    const isMessagePassed = response.msg === expectedResponse.msg;
    const isTestPassed = isCodePassed && isMessagePassed;
    tests.push(isTestPassed);
  }
}

test1();

// ---------------------- 2 -------------

function test2() {
  const response = romanParseator({ numberAsString: '1' });
  const expectedResponse = 'I';
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test2();
// ---------------------- 3 -------------

function test3() {
  try {
    romanParseator({ numberAsString: 1 });
  } catch (myError) {
    // console.log(myError);
    const response = JSON.parse(myError.message);
    const expectedResponse = {
      code: 2,
      msg: 'The numberAsString property must be a string',
    };
    const isCodePassed = response.code === expectedResponse.code;
    const isMessagePassed = response.msg === expectedResponse.msg;
    const isTestPassed = isCodePassed && isMessagePassed;
    tests.push(isTestPassed);
  }
}
test3();

// ---------------------- 4 -------------

function test4() {
  try {
    romanParseator(1);
  } catch (myError) {
    // console.log(myError);
    const response = JSON.parse(myError.message);
    const expectedResponse = {
      code: 1,
      msg: 'The argument must be an object that contains the numberAsString property',
    };
    const isCodePassed = response.code === expectedResponse.code;
    const isMessagePassed = response.msg === expectedResponse.msg;
    const isTestPassed = isCodePassed && isMessagePassed;
    tests.push(isTestPassed);
  }
}
test4();

// ---------------------- 5 -------------

function test5() {
  try {
    romanParseator({ numberAsString: 'a' });
  } catch (myError) {
    // console.log(myError);
    const response = JSON.parse(myError.message);
    const expectedResponse = {
      code: 3,
      msg: 'The entered number is not valid',
    };
    const isCodePassed = response.code === expectedResponse.code;
    const isMessagePassed = response.msg === expectedResponse.msg;
    const isTestPassed = isCodePassed && isMessagePassed;
    tests.push(isTestPassed);
  }
}
test5();

// ---------------------- 5 -------------

function test6() {
  try {
    romanParseator({ numberAsString: '4000' });
  } catch (myError) {
    // console.log(myError);
    const response = JSON.parse(myError.message);
    const expectedResponse = {
      code: 4,
      msg: 'The number cannot be bigger than 3999',
    };
    const isCodePassed = response.code === expectedResponse.code;
    const isMessagePassed = response.msg === expectedResponse.msg;
    const isTestPassed = isCodePassed && isMessagePassed;
    tests.push(isTestPassed);
  }
}
test6();

// ---------------------- 7 -------------

function test7() {
  const response = romanParseator({ numberAsString: '5' });
  const expectedResponse = 'V';
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test7();

// ---------------------- 8 -------------

function test8() {
  const response = romanParseator({ numberAsString: 'IX' });
  // console.log('test 8 response', response);
  const expectedResponse = 9;
  // console.log('test 8 expectedresponse', expectedResponse);
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test8();

// ---------------------- 9 -------------

function test9() {
  const response = romanParseator({ numberAsString: 'IV' });
  const expectedResponse = 4;
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test9();
// ---------------------- 10 -------------

function test10() {
  const response = romanParseator({ numberAsString: 'IC' });
  const expectedResponse = 99;
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test10();

// ---------------------- 11 -------------

function test11() {
  const response = romanParseator({ numberAsString: 'IL' });
  const expectedResponse = 49;
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test11();

// ---------------------- 12 -------------

function test12() {
  const response = romanParseator({ numberAsString: 'XC' });
  const expectedResponse = 90;
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test12();

// ---------------------- 13 -------------

function test13() {
  const response = romanParseator({ numberAsString: 'XL' });
  const expectedResponse = 40;
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test13();

// ---------------------- 13 -------------

function test14() {
  const response = romanParseator({ numberAsString: 'XM' });
  const expectedResponse = 990;
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test14();

// ---------------------- 15 -------------

function test15() {
  const response = romanParseator({ numberAsString: '10' });
  const expectedResponse = 'X';
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test15();

// ---------------------- 16 -------------

function test16() {
  const response = romanParseator({ numberAsString: '100' });
  const expectedResponse = 'C';
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test16();

// ---------------------- 17 -------------

function test17() {
  const response = romanParseator({ numberAsString: '1000' });
  const expectedResponse = 'M';
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test17();

// ---------------------- 18 -------------

function test18() {
  const response = romanParseator({ numberAsString: '3999' });
  const expectedResponse = 'MMMCMXCIX';
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test18();
// ---------------------- 19 -------------

function test19() {
  const response = romanParseator({ numberAsString: '2999' });
  const expectedResponse = 'MMCMXCIX';
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test19();

// ---------------------- 19 -------------

function test20() {
  const response = romanParseator({ numberAsString: '2000' });
  const expectedResponse = 'MM';
  const isTestPassed = response === expectedResponse;
  tests.push(isTestPassed);
}
test20();

romanParseator({ numberAsString: 'i' });
romanParseator({ numberAsString: 'I' });
romanParseator({ numberAsString: 'v' });
romanParseator({ numberAsString: 'L' });
romanParseator({ numberAsString: 'l' });
romanParseator({ numberAsString: '400' });

console.log(romanParseator({ numberAsString: 'XXXVI' }));

// ------------------------ SUMMARY ------------------------
const failedTests = tests.filter((test) => !test);
if (!failedTests.length) {
  console.log('Congratulations! All test passed ✅');
} else {
  console.log('Oooooh! Your code sucks 🤢');
  tests.forEach((test, index) => {
    if (!test) {
      console.log(`The test number ${index + 1} failed ❌`);
    }
  });
}
