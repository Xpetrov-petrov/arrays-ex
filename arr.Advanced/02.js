function solve(arr) {
    let result = [];

    for (let numasString of arr) {
        let num = Number(numasString);

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num)
        }
    }
   console.log(result.join("\n"));
}
solve(['7', '-2', '8', '9']);
//solve(['3', '-2', '0', '-1'] )