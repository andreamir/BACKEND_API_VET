function sayMyName(name) {
  if (!name) {
    throw new Error('Name is required');
  }
  console.log(name);
}

function sayMySurname(surname) {
  if (!surname) {
    const myError = {
      code: 403,
      msg: 'Surname is required',
    };
    throw new Error(JSON.stringify(myError));
  }
  console.log(surname);
}

function initApp() {
  sayMyName();
  sayMySurname();
}
try {
  initApp();
} catch (error) {
  console.log(error.message); // si es un string

  // si es un objeto,
  // const myErrorAsString = error.message;
  // const myError = JSON.parse(myErrorAsString);
  // console.log(myError.code);
  // console.log(myError.msg);
}
