import { User } from "../omit";

const newUser: Omit<User, "name"> = {
  age: 12,
  //   name: "nsengi",
  address: "kigali",
  email: "ok",
  password: "1234",
  phone: "67676",
  city: "999",
};

// name want be assigned hence it was omitted
