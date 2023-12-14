function fibonacci(num) {
// your code here
    if (num <= 1) {
        return num;
    }

    let fibPrev = 0;
    let fibCurrent = 1;

    for (let i = 2; i <= num; i++) {
        let temp = fibPrev + fibCurrent;
        fibPrev = fibCurrent;
        fibCurrent = temp;
    }

    return fibCurrent;
}

module.exports = fibonacci;
