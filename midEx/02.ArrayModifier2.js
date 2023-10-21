function solve(arr) {
    let newArr = arr.shift().split(' ').map(Number);

    for (let commandIndex = 0; commandIndex < arr.length; commandIndex++) {

        let commands = arr[commandIndex];
        let tokens = commands.split(' ');
        let command = tokens.shift();

        while(command != "end"){
          
            if(command == "swap"){
                let currentArr = newArr.splice(1,3)
                console.log(currentArr);
            }
        }

    }
}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);