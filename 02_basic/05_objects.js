// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "samar";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullname: {
      firstname: "sagar",
      lastname: "chauhan",
    },
  },
};

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };

// console.log(obj3);

// const obj4 = Object.assign(obj1, obj2);

// console.log(obj4);

const obj5 = { ...obj1, ...obj2 };

// console.log(obj5);

const users = [
  {
    id: 1,
    email: "sagar@mircosoft.com",
  },
  {
    id: 1,
    email: "sagar@mircosoft.com",
  },
  {
    id: 1,
    email: "sagar@mircosoft.com",
  },
  {
    id: 1,
    email: "sagar@mircosoft.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(users));

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js with sagar",
  price: "999",
  courseInstructor: "sagar",
};

course.courseInstructor;

const { courseInstructor: instructor } = course;

console.log(instructor);

