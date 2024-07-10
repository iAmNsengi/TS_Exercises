let x: unknown = "ok";
console.log((x as string).length);

// casting with < >

let y: unknown;
y = "nsengi";
console.log((<string>y).length);

// force casting
let greeting = "hello";
console.log((greeting as unknown as string).length);


console.log((<number>4).toFixed);
