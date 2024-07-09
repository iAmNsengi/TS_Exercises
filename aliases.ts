// TS allows types to be defined separately from the variables that use them.
type carSize = string;
type car = {
  name: string;
  color?: string;
};

let mySize: carSize = "45";
let myCar: car;

myCar = {
  name: "BMW",
};
