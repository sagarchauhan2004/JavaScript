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

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("Please enter the username");
//     return
//   }
//   return `${username} just logged in`;
// }

// const fun = loginUserMessage("sagar");

// console.log(fun);

// console.log(loginUserMessage("raju"));

// loginUserMessage();

// function calculateCartPrice(...num1) {
//   return num1;
// }

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "sagar",
  price: 80,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

// handleObject({
//   username: "samar",
//   price: 399,
// });

const myNewArray = [200, 300, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 900, 400, 700]));
