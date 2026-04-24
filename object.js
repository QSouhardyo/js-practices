// 1.
const person = {
    name: "Rahim",
    age: 35,
    city: "dhaka"
};

console.log('1', person.name);

// 2.
const car = {
    brand: "suzuki",
    model: "ram8",
    price: 2500000
};

console.log('2', car["price"]);

// 3.
const user = {
    name: "Rahim",
    email: "rahim@gmail.com",
    password: "1234"
};

const emailId = user['email']
console.log('3', emailId);

// 4.

const student = {
    name: 'Rahim',
    roll: 32,
}

student.grade = 'A+'
student['gradePoint'] = '5.00'
console.log('4', student);

// 5.
const marks = {
    math: 80,
    english: 70,
    science: 90
};

const total = marks.math + marks.english + marks.science

console.log('5', total);
// 6.

const phone = {
    brand: "Samsung",
    price: 25000,
    color: "Black"
};

const keys = Object.keys(phone)

console.log('6', keys);

// 7. 

const values = Object.values(phone)

console.log('7', values);

// 8.

const users = {
    name: "Karim",
    address: {
        city: "Dhaka",
        zip: 1207
    }
};

console.log('8', users.address.city);

// 10

const products = [
    { name: "Mouse", available: true },
    { name: "Keyboard", available: false },
    { name: "Monitor", available: true }
];

for (product of products) {
    if (product.available === true) {
        console.log('10', product.name);
    }


}