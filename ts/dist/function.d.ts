declare const t: NodeJS.Timeout;
declare const a: number[];
declare const b: (string | number)[];
declare const c: (string | number)[];
declare const oneToTen: number[];
declare const nums1: number[];
declare const nums2: number[];
declare const result1: number[];
type AA = {
    name: string;
    age: number;
};
type BB = {
    name: string;
    addr: string;
};
declare const onlyA: AA[];
declare const onlyB: BB[];
declare const aOrB: (AA | BB)[];
declare const greeting: (greet: "Hi" | "Hello", name: string, age: number) => void;
