interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<number, string> = { first: 42, second: "Nsengi" };

console.log(pair.first);
console.log(pair.second);

const pair2: Pair<boolean, number> = { first: true, second: 200 };
