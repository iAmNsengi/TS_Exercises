// class Person {
//   name: string;
// }
// const person = new Person();
// person.name = "Nsengi";

class Person {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

const person = new Person("nsengi");
console.log(person.getName());
