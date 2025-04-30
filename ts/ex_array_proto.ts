import assert from "assert";
type Prop = string | number | symbol;

declare global {
  interface Array<T> {
    firstObject: T;
    lastObject: T;
    mapBy: (prop: string) => T;
    filterBy: (prop: Prop, value: unknown, isInclude?: boolean) => T[];
  }
}

const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: "Hong" };
