interface myInterface {
  [index: string]: string | number;
}
let myPerson: myInterface = {
  name: "nsengi",
};

function mydecorator(): boolean {
  return true;
}

function logPerson(): void {
  console.log("I am nsengi");
}

myPerson.age = 23;
console.log(myPerson);
