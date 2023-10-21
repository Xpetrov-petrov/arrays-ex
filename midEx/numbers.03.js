function numbers(input) {
    let arrOfNumns = input.split(' ').map(Number);
    let reduced = arrOfNumns.reduce((acc, val) => acc + val) / arrOfNumns.length;
    let topNums = arrOfNumns.filter(num => num > reduced).sort((a, b) => b - a).slice(0, 5);

    if (topNums.length == 0) {
        console.log('No');
    } else {
        console.log(topNums.join(' '));
    }

}
// numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
