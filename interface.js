function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person1 = {
    firstName: 'Ritu',
    lastName: 'Raj'
};
console.log(getFullName(person1));
function FullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var rr = {
    firstName: 'Ritu',
    lastName: 'Raj'
};
console.log(FullName(rr));
