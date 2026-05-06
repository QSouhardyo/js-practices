function add(a, b) {
    let result = a + b;
    console.log(result);

    // return result;
}

add(5, 3)

const numbers = [45, 48, 95, 60, 70, 75, 85]
let sum = 0
let odd = []
function oddNumberAvrg() {
    for (num of numbers) {
        if (num % 2 === 1) {
            odd.push(num);
            sum = num + sum
        }

    }

    let avrg = sum / odd.length


    return avrg;
}

const result = oddNumberAvrg()
console.log(odd);

console.log(result);

let students = ['jara', 'sara', 'raha', 'sara', 'tania', 'fatima', 'raha']
function noDuplicate(array) {
    let unique = []
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item)
        }
    }
    return unique;
}

const newArray = noDuplicate(students);

console.log(newArray);
