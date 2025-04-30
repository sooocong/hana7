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

// type Combine2<T, U> = {
//     [k in keyof (T & U)]: k extends keyof  T & keyof U
//     ? T[k] | U[k]
//     : k extends keyof T ? U[k]);
// };

type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};

type ICombined = Combine<IUser, IDept>;

// type ICombined = {
//     id: number;
//     age: string | number;
//     name: string;
//     dname: string;
//     captain: string;
// }
