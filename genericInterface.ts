interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<number, string> = { first: 42, second: "Nsengi" };

console.log(pair.first);
console.log(pair.second);
