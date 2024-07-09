class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  public constructor(zeroValue: T, add: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

const myGenericnumber = new GenericNumber<string>('0', (x, y) => x + y);
console.log(myGenericnumber.add('2', '3'));


