interface myInterface {
  [index: string]: string | number;
}
let myPerson: myInterface = {
  name: "nsengi",
};

myPerson.age = 23;
console.log(myPerson);
