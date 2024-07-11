import { User } from "../omit";

const newUser: Pick<User, "age" | "name"> = {
  age: 12,
  name: "nsengi",
  //   address: "kigali",
  //   email: "ok",
  //   password: "1234",
  //   phone: "67676",
  //   city: "999",
};

// can only contain picked properties
