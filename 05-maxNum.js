function maxNum(arr) {
    let topNums = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNums = arr[j];

            if (rightNums >= num) {
                isTop = false;
                break;
            }

            
        }
        if (isTop) {
            topNums.push(num);
        }
    }
console.log(topNums.join(' '));
}
//maxNum([1, 4, 3, 2] );
maxNum([14, 24, 3, 19, 15, 17]);
//maxNum([41, 41, 34, 20] );
//maxNum([27, 19, 42, 2, 13, 45, 48]);