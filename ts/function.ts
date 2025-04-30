// function ff(params: number): void {
//   console.log("ff");
// }

// const rf1 = ff(1);

// type F = () => void;

// function f(cb: (this: void) => number) {
//   return cb();
// }

// const obj = { id: 1 };

// function x(this: typeof obj) {
//   return this.id;
// }

// function y() {
//   return 1;
// }

// f(y);

const t = setTimeout(console.log, 1000, "1");

const a: number[] = [];
a[100]?.toFixed(); // noUncheckedIndex

const b = [4, 5, "6"];

const c = [...a, ...b];

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("oneToTen > ", oneToTen[400]?.toFixed(2));

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [10, 20, 30, 40, 50];

const result1 = nums1.concat(nums2);

type AA = {
  name: string;
  age: number;
};

type BB = {
  name: string;
  addr: string;
};

const onlyA: AA[] = [
  { name: "lim", age: 10 },
  { name: "hong", age: 20 },
];

const onlyB: BB[] = [
  { name: "jang", addr: "Seoul" },
  { name: "park", addr: "Busan" },
];

const aOrB = [...onlyA, ...onlyB];

const greeting = (greet: "Hi" | "Hello", name: string, age: number) => {
  console.log(`${greet} ~ ${name}, You are ${age}.`);
};

// const gr1 = greeting("Hi", "Hong", 33);
// console.log("gr1:", gr1[0]);

// const tup: [string, number] = ["Kim", 55];
// greeting("Hello", ...tup);

// const ary = ["Park, 44"];
// greeting("Hello", ary[0], ary[1]);
