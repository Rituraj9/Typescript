var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Class in Typescript");
var Person = /** @class */ (function () {
    function Person(usn, firstname, lastname, birthdate) {
        this.usn = usn;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }
    Person.prototype.fullname = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    return Person;
}());
var person = new Person('4NI18IS071', 'Ritu', 'Raj', new Date(2000, 09, 09));
//console.log(person.usn); //compile error
console.log(person.fullname());
console.log(person.birthdate);
//person.birthdate = new Date(2022,02,08); // Read only Property
//Inheritance
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(usn, firstname, lastname, birthdate, jobtitle) {
        var _this = _super.call(this, usn, firstname, lastname, birthdate) || this;
        _this.jobtitle = jobtitle;
        Employee.headcount++;
        return _this;
    }
    Employee.prototype.describe = function () {
        return "I'm a ".concat(this.jobtitle);
    };
    Employee.getheadcount = function () {
        return Employee.headcount;
    };
    Employee.headcount = 0;
    return Employee;
}(Person));
var emp1 = new Employee('4NI18IS071', 'Ritu', 'Raj', new Date(2022, 02, 10), 'Software Engineer Intern');
console.log(emp1.fullname(), emp1.birthdate);
console.log(emp1.describe());
//console.log(Employee.headcount); //static variable
console.log(Employee.getheadcount);
//Abstract Class
var dep = /** @class */ (function () {
    function dep(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    dep.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    dep.prototype.compensationStatement = function () {
        return "".concat(this.fullName(), " makes ").concat(this.getSalary(), " a month.");
    };
    return dep;
}());
//let dep = new dep('John','Doe');
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(dep));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return Contractor;
}(dep));
var john = new FullTimeEmployee('John', 'Doe', 12000);
var jane = new Contractor('Jane', 'Doe', 100, 160);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
