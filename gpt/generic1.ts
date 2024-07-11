function identity(value: number): number;
function identity<T>(value: T): T;

function identity<T>(value: T): T {
  if (typeof value == "number") return value  ** 2 as any;

  return value;
}

console.log(identity<number>(5));
console.log(identity<string>("ok"));
console.log(identity<object>({ name: "nsengi" }));
