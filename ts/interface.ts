interface TT {
  id: number;
  name?: string;
}
let tt: TT = { id: 1 };

type FunctionAlias = (input: string) => number;

interface CallSigmature {
  (input: string): number;
}

type User = {
  id: number;
  addr: string;
};

type BoardUser = User & { addr: string };

interface globalThis {
  x: string;
}

function f(this: globalThis) {
  console.log(this.x);
}

// f.bind({ x: '123' })();
export {};
