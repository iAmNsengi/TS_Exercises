import { User } from "./omit";

// partial changes all properties to optional

type UserPartial = Partial<User> & { name: string };

const user: UserPartial = {
  name: "nsengi",
};

// required changes all optional to required

type UserRequired = Required<User> & { city?: string };
