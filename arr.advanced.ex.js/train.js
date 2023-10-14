function train(arr) {
    let wagons = arr[0].split(' ').map(Number); 
    let capacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(" ");

        if (tokens[0] == 'Add') {
            let passangers = tokens[1];
            wagons.push(passangers);
        } else {
            let passangers = Number(command);

            for (let index = 0; index < wagons.length; index++) {
                if (wagons[index] + passangers <= capacity) {
                    wagons[index] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
//train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6'])