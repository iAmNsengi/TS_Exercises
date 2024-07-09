// class Person {
//   name: string;
// }
// const person = new Person();
// person.name = "Nsengi";
// class Person {
//   private name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
//   public getName(): string {
//     return this.name;
//   }
// }
// const person = new Person("nsengi");
// console.log(person.getName());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Nsengi");
console.log(person.getName());
