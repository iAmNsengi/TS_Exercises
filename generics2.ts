function getIndex<T>(array: T[], arrayItem: T): number {
  return array.indexOf(arrayItem);
}
const arr = [55, 99, 77];
console.log(getIndex(arr, 55));
