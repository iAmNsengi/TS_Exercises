interface User {
  id: number;
  name: string;
}

type optionalUser = {
    [P in keyof User] ?: User[P]
}
