import { User } from "./omit";

// partial changes all properties to optional

type UserPartial = Partial<User>;

// required changes all optional to required

type UserRequired = Required<User>;
