interface Animal {
  name: string;
  sound(): void;
}

class MyAnimal implements Animal {
  name: string;
  public constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log(name);
  }
  age(): void {
    console.log("ok");
  }
}
