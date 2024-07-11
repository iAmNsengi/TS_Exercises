type PIck<T, K extends keyof T> = {
  [P in K]: T[P];
};
interface User {
  id: number;
  name: string;
}

type UserNameAndAge = PIck<User, "name" | "id">;

const userNameAndAge: UserNameAndAge = {
  name: "Alice",
  id: 25,
};
