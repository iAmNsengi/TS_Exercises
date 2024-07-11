import { User } from "../omit";

let newUser: Readonly<User> = {
  age: 12,
  name: "nsengi",
  address: "kigali",
  email: "ok",
  password: "1234",
  phone: "67676",
  city: "999",
};

newUser.address = "gisenyi";
