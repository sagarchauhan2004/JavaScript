const name = "sagar"

const repoCount = 50

// console.log(name + repoCount + " value") // not Recomended

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('sagar-sc')

console.log(gameName)

console.log(gameName[0])

console.log(gameName.__proto__) // giving object


console.log(`the length is : ${gameName.length}`);

console.log(`to uppercase : ${gameName.toLocaleUpperCase()}`);

console.log(`position : ${gameName.charAt(2)}`);

console.log(`at index : ${gameName.indexOf('a')}`);

console.log(`slice : ${gameName.slice(0, 2)}`);

console.log(`substring ${gameName.substring(0, 4)}`);

const newString = "      sagar      ";

console.log(`trim : ${newString.trim()}`);

const url = "https://sagar.com/sagar%20chauhan"

console.log(`replace : ${url.replace('%20', '-')}`)

console.log(`includes : ${url.includes('sagar')}`);

console.log(`includes : ${url.includes('sundar')}`);

const newstr = "sagar-singh-chauhan"

console.log(`split : ${newstr.split('-')}`);