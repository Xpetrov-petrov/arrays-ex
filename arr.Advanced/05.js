function processOddNumbers(arr){
let oddIndex = arr.filter((x, i) => i % 2 != 0)


    let doubled = oddIndex.map(x => x * 2);
  

    let result = doubled.reverse()
    console.log(result.join(" "));
}
processOddNumbers([3, 0, 10, 4, 7, 3] )
