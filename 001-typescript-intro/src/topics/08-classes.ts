export class Person {

    constructor(
        public firstName: string, 
        public lastName: string,
        private address: string = 'No address'
    ){};
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public superPower: string,
//         public realName: string
//     ){
//         super(realName, 'New York');
//     }
// }

export class Hero{
    constructor(
        public alterEgo: string,
        public superPower: string,
        public realName: string,
        public person: Person,
    ){};
}

const person = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 'Money', 'Tony Stark', person);
console.log(ironman);