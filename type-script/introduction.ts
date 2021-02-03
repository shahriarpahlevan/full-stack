export {};
//--------------type initialisation-----------------
// const x: number = 10;
// const y: number = 4;
// const z: number = x + y;

// console.log(z);
//------------different array type definitions----------------
// const arr: string[] = [];
// const arr2 = new Array<string>();
// const arrNum: number[] = [];
// const arrNum2 = new Array<number>();

//-------------interface definition-----------------
interface IPerson {
  name: string;
  age: number;
}

//--------------array with type---------------------
// 1st way
// const person: IPerson = {
//   name: "saeid",
//   age: 25
// };
// const people: IPerson[] = [{ ...person }];
// console.log(people[0]);

// 2nd way
// const people = new Array<IPerson>();
// const myPeople: IPerson[] = [];

// people.push(person);
// console.log(people[0]);

//-----------------object oriented definition (ES6)---------------
class Person implements IPerson {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("shahriar", 25);
console.log(person);

function print(Person: IPerson) {
  console.log(`${Person.age}`);
}

print(person);

