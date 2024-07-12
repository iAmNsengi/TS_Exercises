interface User {
  id: number;
  name: string;
}

// type Readonly<T> = {
//   [P in keyof T]?: Readonly<T[P]>;
// };

const myUser: Readonly<User> = {
  id: 1,
  name: "nsengi",
//   age: 12,
};

// myUser.name = "ok";
