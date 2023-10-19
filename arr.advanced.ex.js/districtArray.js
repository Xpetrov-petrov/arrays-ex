function solve(arr1, arr2) {
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
}
solve([5, 2, 3, 4, 1, 6],
    [5, 3, 3])
