function add(a: number, b: string, c: boolean) {
  return `${a} - ${b} + ${c}`;
}

// type FirstArgs<F> = F extends (a: infer A, ...args: any) => any ? A : never;
// type SecondArgs<F> = F extends (a: any, b: infer B, ...args: any) => any
//   ? B
//   : never;
// type Args<F> = F extends (...args: infer A) => any ? A[number] : never;

type FirstArgs<F> = F extends (a: infer First, ...rest: any) => any
  ? First
  : never;
type SecondArgs<F> = F extends (a: any, b: infer Second, ...rest: any) => any
  ? Second
  : never;
type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string | boolean

type AX = Args<typeof String.prototype.endsWith>;
type AX1 = Args<typeof String.prototype.charAt>;

let b: B = "abc";
let c: C = Math.random() > 0.5 ? 1 : "abc";
console.log("🚀 abc:", a, b, c);
export {};
