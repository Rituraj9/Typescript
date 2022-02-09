function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person1 = {
    firstName: 'Ritu',
    lastName: 'Raj'
};

console.log(getFullName(person1));

interface Person {
    firstName: string;
    lastName: string;
}

function FullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let rr = {
    firstName: 'Ritu',
    lastName: 'Raj'
};

console.log(FullName(rr));