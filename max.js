const age = [65, 32, 109, 47, 58, 97]

function maxAge(nums) {
    let max = age[0]

    for (let num of nums) {
        if (num > max) {
            max = num;
        }

    }
    return max;
}

const result = maxAge(age)

console.log(result);
