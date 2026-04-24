var names = 'Hi Mr Developer'

let empty = ""
for (name of names) {
    empty = name + empty

}

console.log(empty);

const reverse = names.split('').reverse().join('')

console.log(reverse);
