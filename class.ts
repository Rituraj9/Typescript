console.log("Class in Typescript");

class Person
{
    birthdate: Date;

    private usn: string;
    private firstname: string;
    private lastname: string;

    constructor(usn: string,firstname: string,lastname: string,birthdate: Date)
    {
        this.usn=usn;
        this.firstname=firstname;
        this.lastname=lastname;
        this.birthdate=birthdate;
    }

    fullname(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}

let person = new Person('4NI18IS071','Ritu','Raj',new Date(2000,09,09));
//console.log(person.usn); //compile error
console.log(person.fullname());
console.log(person.birthdate);
//person.birthdate = new Date(2022,02,08); // Read only Property

//Inheritance
class Employee extends Person
{
    private static headcount:number = 0;

    constructor(usn:string,firstname:string,lastname:string,birthdate: Date,private jobtitle:string)
    {
        super(usn,firstname,lastname,birthdate);
        Employee.headcount++;
    }
    describe(): string {
        return `I'm a ${this.jobtitle}`;
    }
    public static getheadcount(){
        return Employee.headcount;
    }

}

let emp1 = new Employee('4NI18IS071','Ritu','Raj',new Date(2022,02,10),'Software Engineer Intern');

console.log(emp1.fullname(),emp1.birthdate);
console.log(emp1.describe());

//console.log(Employee.headcount); //static variable

console.log(Employee.getheadcount);

//Abstract Class
abstract class dep {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
   fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName()} makes ${this.getSalary()} a month.`;
    }
}

//let dep = new dep('John','Doe');

class FullTimeEmployee extends dep {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends dep {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());