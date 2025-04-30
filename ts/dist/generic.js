"use strict";
// type Err = Change<IDept, 'xxx', IUser>; // 존재하지 않는 키는 에러!!!
const dc = {
    id: 2,
    age: "1년",
    dname: "Sales",
    captain: { id: 1, name: "Hong", age: 33 },
};
console.log("--------------------------");
const stock = { X: 1, Y: 2, Z: 30 };
const itemPrices = [
    { item: "X", price: 1000 },
    { item: "Y", price: 2000 },
    { item: "Z", price: 3000 },
];
const total = itemPrices.reduce((curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price, 0);
console.log("--------------------------");
function deleteArray(arr, startOrKey, endOrValue) {
    if (typeof startOrKey === "number") {
        if (typeof endOrValue === "number") {
            return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
        }
        return arr.slice(0, startOrKey);
    }
}
const arr = [1, 2, 3, 4];
const users = [{ id: 1, name: "Hong" }];
