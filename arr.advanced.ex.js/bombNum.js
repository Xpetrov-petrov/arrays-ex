function bombNums(arr1, arr2) {
    let [bombNum, bombPower] = arr2;

    while (arr1.includes(bombNum)) {
        let index = arr1.indexOf(bombNum);
        arr1.splice(Math.max(0, index - bombPower), bombPower * 2 + 1,0 );

    }
    let sum = 0;

    for (let n of arr1) {
        sum += n
    }
    console.log(sum);
}
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
//bombNums([1, 7, 7, 1, 2, 3],[7, 1])
//bombNums([1, 4, 4, 2, 8, 9,1],[9, 3]);
 //bombNums([1, 2, 2, 4, 2, 2,2, 9],[4, 2])