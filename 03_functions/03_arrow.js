const user = {
  username: "sagar",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "samar"
// user.welcomeMessage()

// const num = {
//   username: "hello",

//   abcd : function(){
//     console.log(this.username);

//   }
// };

// console.log(num);

// function chai() {
//   let username = "sagar";

//   console.log(this.username);
// }

// const chai = () => {
//   let username = "sagar";
//   console.log(this);
// };

// chai();

// const addtwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addtwo(2, 6));

const newaddtwo = (num1, num2) => num1 + num2;

console.log(newaddtwo(3, 5));

