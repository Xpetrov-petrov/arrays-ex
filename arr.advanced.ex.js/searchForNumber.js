function searchForNumber(arr1, arr2) {
    let numberCount = arr2[0];
    let delNumsCount = arr2[1];
    let topNum = arr2[2];
    let counter = 0;
   

    let newArr = arr1.splice(0, numberCount);

    newArr.splice(0, delNumsCount);

    for (let i = 0; i < newArr.length ; i++) {

        if (newArr[i] == topNum) {
            counter++;
            
        } else {
           
        }
       
    }
    console.log(`Number ${topNum} occurs ${counter} times.`);

}


searchForNumber([7, 1, 5, 8, 2, 7],
 [3, 1, 5]);
//searchForNumber([5, 2, 3, 1, 6],
  //  [5, 2, 3]);
// console.log(`Number ${topNum} occurs ${counter} times.`);