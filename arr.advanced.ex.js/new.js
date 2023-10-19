function solve(arr){
let res = [];
for(let numAsString of arr){
    let num = Number(numAsString);

    if(num < 0){
        res.unshift(num)
    }else{
        res.push(num);
    }

}
for(let num of res){
    console.log(num);
}
}
 solve(['3', '-2', '0', '-1'] )