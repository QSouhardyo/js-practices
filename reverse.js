var names = 'Hi Mr Developer'

let empty = ""
for (name of names) {
    empty = name + empty

}

console.log(empty);

const reverse = names.split('').reverse().join('')

console.log(reverse);


const numbers = [1, 2, 3, 4, 5]

reversed = []

for (let i = 0; i < numbers.length; i++) {
    number = numbers[i]

    reversed.unshift(number);

}

console.log(reversed);

