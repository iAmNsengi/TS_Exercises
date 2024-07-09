let x: unknown = "ok";
console.log((x as string).length);

// casting with < >

let y: unknown;
y = "nsengi";
console.log((<string>y).length);
