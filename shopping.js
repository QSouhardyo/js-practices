const product = [
    { name: 'samsung', price: 23000, quantity: 3 },
    { name: 'xiamo', price: 30000, quantity: 5 },
    { name: 'realme', price: 28000, quantity: 4 },
    { name: 'walton', price: 25000, quantity: 9 },
]

function totalPrice(item) {
    let total = 0
    for (const item of product) {
        total = total + item.price

    }

    return total;
}

const result = totalPrice(product)

console.log(result);


function cheapestPhone(item) {
    let min = product[0]
    for (const item of product) {
        if (min.price < product.price) {
            min = product

        }

    }
    return min;
}

const cheapest = cheapestPhone(product)

console.log(cheapest);
