interface A {
  name: string;
}

interface B {
  age: number;
}

const me: A & B = { name: "Nsengi", age: 22 };

