function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(5));
console.log(identity<string>("ok"));
console.log(identity<object>({ name: "nsengi" }));
