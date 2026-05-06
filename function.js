function add(a, b) {
    let result = a + b;
    console.log(result);

    // return result;
}

add(5, 3)

const numbers = [65, 48, 95, 60, 70, 75, 65]
let sum = 0
function oddNumberAvrg() {
    for (num of numbers) {
        if (num % 2 === 1) {
            sum = num + sum
        }

    }
    return sum;
}

const result = oddNumberAvrg()

console.log(result);
