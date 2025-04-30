type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};

type DeptCaptain = Change<IDept, "captain", IUser>;
// type Err = Change<IDept, 'xxx', IUser>; // 존재하지 않는 키는 에러!!!

const dc: DeptCaptain = {
  id: 2,
  age: "1년",
  dname: "Sales",
  captain: { id: 1, name: "Hong", age: 33 },
};

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

console.log("--------------------------");

type Item = { item: string; price: number };
type ItemPrice<T, U> = {
  [k in keyof T]: k extends "item" ? keyof U : T[k];
};

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: "X", price: 1000 },
  { item: "Y", price: 2000 },
  { item: "Z", price: 3000 },
];
const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);

console.log("--------------------------");

function deleteArray<T>(
  arr: T[],
  startOrKey: number | keyof T,
  endOrValue?: number | T[keyof T]
) {
  if (typeof startOrKey === "number") {
    if (typeof endOrValue === "number") {
      return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
    }
    return arr.slice(0, startOrKey);
  }
}

const arr = [1, 2, 3, 4];

const users = [{ id: 1, name: "Hong" }];
