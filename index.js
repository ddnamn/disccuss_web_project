// const arr = [
//   { name: "amin", age: 20 },
//   { name: "amin", age: 13 },
//   { name: "pesut", age: 16 },
// ];

// const uniqueCategory = new Set();

// arr.forEach((x) => {
//   if (!uniqueNames.has(x.name)) {
//     uniqueNames.add(x.name);
//     console.log(x.name);
//   }
// });

// const z = ["redux", "remix", "javascript", "redux"];

// let x = [];

// x = z.filter((word, index, self) => self.indexOf(word.title) === index);

// console.log(x);

// const uniqueValues = {};

// z.forEach((item) => {
//   if (!uniqueValues[item]) {
//     x.push(item);
//     uniqueValues[item] = true;
//   }
// });

// console.log(x);

const z = [
  { id: 1, title: "jsx" },
  { id: 2, title: "remix" },
  { id: 3, title: "javascript" },
  { id: 4, title: "javascript" },
];

let x = [];

x = z
  .filter((obj, index, self) => {
    // Filter hanya objek dengan title yang belum ada di x
    return self.findIndex((item) => item.title === obj.title) === index;
  })
  .map((obj) => obj.title);

console.log(x);
