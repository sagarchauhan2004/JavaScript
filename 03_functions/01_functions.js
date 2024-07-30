function sayMyName() {
  console.log("s");
  console.log("a");
  console.log("g");
  console.log("a");
  console.log("r");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

// console.log(addTwoNumbers(2, 5));

// console.log(addTwoNumbers("2", 5));

// console.log(addTwoNumbers(3, "a"));

// console.log(addTwoNumbers(3, null));

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter the username");
    return
  }
  return `${username} just logged in`;
}

const fun = loginUserMessage("sagar");

console.log(fun);

console.log(loginUserMessage("raju"));

loginUserMessage();