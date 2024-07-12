interface User {
  name: string;
  age: number;
}

type Point = {
  x: number;
  y: number;
};

function add(a: number): never & void {
    console.log("ok");
}
