function solve(arr){
let firstNum = arr.shift();
let lastNum = arr.pop();
console.log(Number(firstNum) + Number(lastNum));
}
solve(['20', '30', '40'])
//solve(['5','10']);