function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(2, 2));

declare let h: string;
h = "ok";
let xc: Array<number> = [1,2,3,4]