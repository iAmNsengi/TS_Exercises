type Role = "admin" | "user" | "guest";
type UserRoles = Record<Role, string>;

const roles: UserRoles = {
  admin: "Admin",
  user: "User",
  guest: "Guest",
  //   nsengi: "ok",
};
