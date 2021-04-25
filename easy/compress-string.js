/**
 * Compress a given string “aacccddd” to “a2c3d3”
 * constrain: If the string was “abbccddd,”
 * compress it to “ab2c2d3.” In other words, if there was only one kind of letter consecutively, 
 * don’t give it a number.
 */
function compress(string) {
    let count = 1,
        compressed = "";
    for (let i = 1; i <= string.length; i++) {
        if (string[i] === string[i - 1]) {
            count++
        } else {
            compressed += count <= 1 ? string[i - 1] : `${string[i-1]}${count}`
            count = 1
        }
    };
    return compressed;
}