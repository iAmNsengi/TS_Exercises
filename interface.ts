// interfaces are like type aliases but they are applied on objects

interface myCar {
  name: string;
  color: string;
}

let car: myCar;
car = {
  name: "BMW",
  color: "red",
};

let xy: number = 7
xy = undefined