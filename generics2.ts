function getIndex<T>(array: T[], arrayItem: T): number {
  return array.findIndex((item) => item === arrayItem);
}
const arr = [55, 99, 77];
console.log(getIndex(arr, 55));
