export interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
}

type UserProfilePick = Pick<User, "phone" | "name" | "email">;
