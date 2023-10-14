function sorting(arr) {
    let sortArr = arr.sort((a, b) => a - b );
    let finalArr = [];

    while (sortArr.length > 0) {
        maxNum = sortArr.pop();
        minNum = sortArr.shift();

        finalArr.push(maxNum, minNum);
        

    }
    console.log(finalArr.join(' '));
   
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
//sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])