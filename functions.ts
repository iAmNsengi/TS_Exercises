function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
console.log(divide({ dividend: 2, divisor: 4 }));

function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add(12, 2, 2, 2, 2, 2));

// function type aliases
type Negate = (value: number) => number;

const negation: Negate = (value) => {
  return value;
};
