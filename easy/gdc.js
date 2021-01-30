/*
    Find the greatest common denominator of two numbers

    using the Euclid's algorithm
*/

/*
    solution:
    1- first check if one of the given input is a multiple of the other number:
    let a and b be the given input

    2- if a> b, check if a/b === 0. if the remainder is 0, stop and return b
    3- else set a to b and b to the remainder and repeat the previous step
*/

const gcd = (a, b) => {
    if (Math.min(a, b) === 0) return 'impossible operation'
    let max = Math.max(a, b),
        min = Math.min(a, b),
        r = max % min
    while (r !== 0) {
        max = min
        min = r
        r = max % min
    }
    return min

}

// testing
console.log(gcd(20, 8))
console.log(gcd(20, 0))
console.log(gcd(60, 96))
console.log(gcd(20, 11))