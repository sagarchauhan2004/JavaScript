// let a = 300;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log("INNER :", a);
// }

// console.log("OUTER :",a);
// // console.log(b);
// console.log(c);

function one() {
  const username = "sagar";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();
