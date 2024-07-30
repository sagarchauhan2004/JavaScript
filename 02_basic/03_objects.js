// singleton

// object.create
// object literals

const mySym = Symbol("key");

const jsUser = {
  name: "sagar",
  "full name": "sagar chauhan",
  [mySym]: "mykey1",
  age: 20,
  location: "uttrakhand",
  email: "sagar@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);

// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "sagar@chatGPT.com"

// console.log(jsUser.email);

// Object.freeze(jsUser)
// jsUser.email = "sagar@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello js user , ${this.name} `);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
