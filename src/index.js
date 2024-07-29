module.exports = function reverse (n) {
    let nString = n.toString();
    if (nString[0] === '-') {
      nString = nString.slice(1);
    }
    
    return Number(nString.split('').reverse().join(''))
}
