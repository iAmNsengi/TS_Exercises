export interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
}

type UserProfile = Omit<User, "password" | "email">;

interface UserProfileInterface extends Omit<User, "password" | "email">{}