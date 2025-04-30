type Change<T, K extends keyof T, U> = {
    [k in keyof T]: k extends K ? U : T[k];
};
type DeptCaptain = Change<IDept, "captain", IUser>;
declare const dc: DeptCaptain;
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
type Item = {
    item: string;
    price: number;
};
type ItemPrice<T, U> = {
    [k in keyof T]: k extends "item" ? keyof U : T[k];
};
declare const stock: {
    X: number;
    Y: number;
    Z: number;
};
declare const itemPrices: ItemPrice<Item, typeof stock>[];
declare const total: number;
declare function deleteArray<T>(arr: T[], startOrKey: number | keyof T, endOrValue?: number | T[keyof T]): T[] | undefined;
declare const arr: number[];
declare const users: {
    id: number;
    name: string;
}[];
