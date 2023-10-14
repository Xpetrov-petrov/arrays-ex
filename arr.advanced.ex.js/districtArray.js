function districtArray(arr) {
    let uniqueNums = [];

    for (let num of arr) {
        if (!uniqueNums.includes(num)) {
            uniqueNums.push(num);
        }
    }
    console.log(uniqueNums.join(' '));
}
districtArray([1, 2, 3, 4]);
//districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
//districtArray([20, 8, 12, 13, 4, 4, 8, 5])