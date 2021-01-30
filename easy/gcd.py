"""
Find the greatest common denominator of two numbers

    using the Euclid's algorithm

    solution: 
    1- first check if one of the given input is a multiple of the other number:
    let a and b be the given input

    2- if a> b, check if a/b === 0. if the remainder is 0, stop and return b
    3- else set a to b and b to the remainder and repeat the previous step
"""
def gcd(a,b):
    if min(a,b) == 0:
        return 'impossible operation'
    while(b != 0):
        r = a%b
        a = b
        b = r
    return a

# test
print(gcd(20,8))
print(gcd(20,11))
print(gcd(5,0))