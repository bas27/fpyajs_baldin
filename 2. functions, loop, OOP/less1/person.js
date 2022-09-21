const person1 = {
    name: 'John',
    age: 45
}

const person2 = {
    name: 'Nik',
    age: 20
}

const getAge = function() {
    return this.age;
}

person1.getAge = getAge;
person2.getAge = getAge

// console.log(person.toString)

console.log(person1.getAge())
console.log(person2.getAge())
console.log(person1.getAge === person2.getAge)