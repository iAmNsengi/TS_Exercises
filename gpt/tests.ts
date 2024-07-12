const graph: [x: number, y: number] = [55.2, 41.3];

console.log();
interface guy {
  name: string;
  age: number;
  address?: string;
}

const myGuy: guy = {
  name: "nsengi",
  age: 22,
};

console.log(myGuy.address!);
