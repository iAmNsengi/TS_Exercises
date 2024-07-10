import { User } from "./omit";

const users: Record<string, { name: string }> = {
  "1": { name: "nsengi" },
};

const data = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "jane",
    age: 25,
  },
];

const result = data.reduce(
  (acc: Record<string, { name: string; age: number }>, cur, index) => {
    acc[String(index)] = { ...cur };
    return acc;
  },
  {}
);

console.log(result);

result["1"];
