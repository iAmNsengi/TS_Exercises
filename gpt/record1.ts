type Role = "admin" | "user" | "guest";
type UserRoles = Record<Role, string>;

const roles: UserRoles = {
  admin: "Admin",
  user: "User",
  guest: "Guest",
  //   nsengi: "ok",
};

type Test = Record<string, Role>;

const users: Test = {
  kagabo: "admin",
  peter: "user",
};


let yy: unknown = 'ok';

yy = "ok"

let xx  = (yy as number) + (yy as number)\[]

