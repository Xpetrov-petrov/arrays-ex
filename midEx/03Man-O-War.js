<<<<<<< HEAD
function solve(input) {

    let pirate = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxHp = Number(input.shift());
    let critical = maxHp *2;
   

    for (let current of input) {

        let tokens = current.split(' ');
        let command = tokens.shift();

        if (command == "Retire") {
            break;
        } else if (command == 'Fire') {
           let index = Number(tokens[0]);
           let damage = Number(tokens[1]); 

           if(index < 0 || index >= warship.length){
            continue;
           }
           warship[index] -= damage;

           if(warship[index] <= 0){
               console.log('You won! The enemy ship has sumken.');
               return;
           }
        } else if (command == 'Defend') {
           let start = Number(tokens[0]);
           let end = Number(tokens[1]); 
           let damage = Number(tokens[2]);

           if(start < 0 || start >= pirate.length || end < 0 || end >= pirate.length){
            continue;
           }

           for(let i = start; i <= end; i++){
            pirate[i] -= damage;

            if(pirate[i] <= 0){
                console.log('You lost! The pirate ship has sumken.');
                return;
            }
           }

            console.log('man-o-war attacks');
        } else if (command == 'Repair') {
            let index = Number(tokens[0]);
           let hp = Number(tokens[1]); 

           if(index < 0 || index >= pirate.length){
            continue;
           }
           pirate[index] += hp;
           if(pirate[index] > maxHp){
            pirate[index] = maxHp;

           }

        } else if (command == 'Status') {
      let damage = pirate.filter(section => section < critical);
      console.log(`${damage.length} sections need repair.`);
        }
    }
    let warshipStatus = 0;
    let pirateStatus = 0;

    for(let section of pirate){
        pirateStatus += section;
    }
    for(let section of warship){
        warshipStatus += section;
    }
    console.log(`Pirate ship status: ${pirateStatus}`);
    console.log(`Warship status: ${warshipStatus}`);
}
solve(['2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire']);
=======
function solve(input) {

    let pirate = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxHp = Number(input.shift());
    let critical = maxHp *2;
   

    for (let current of input) {

        let tokens = current.split(' ');
        let command = tokens.shift();

        if (command == "Retire") {
            break;
        } else if (command == 'Fire') {
           let index = Number(tokens[0]);
           let damage = Number(tokens[1]); 

           if(index < 0 || index >= warship.length){
            continue;
           }
           warship[index] -= damage;

           if(warship[index] <= 0){
               console.log('You won! The enemy ship has sumken.');
               return;
           }
        } else if (command == 'Defend') {
           let start = Number(tokens[0]);
           let end = Number(tokens[1]); 
           let damage = Number(tokens[2]);

           if(start < 0 || start >= pirate.length || end < 0 || end >= pirate.length){
            continue;
           }

           for(let i = start; i <= end; i++){
            pirate[i] -= damage;

            if(pirate[i] <= 0){
                console.log('You lost! The pirate ship has sumken.');
                return;
            }
           }

            console.log('man-o-war attacks');
        } else if (command == 'Repair') {
            let index = Number(tokens[0]);
           let hp = Number(tokens[1]); 

           if(index < 0 || index >= pirate.length){
            continue;
           }
           pirate[index] += hp;
           if(pirate[index] > maxHp){
            pirate[index] = maxHp;

           }

        } else if (command == 'Status') {
      let damage = pirate.filter(section => section < critical);
      console.log(`${damage.length} sections need repair.`);
        }
    }
    let warshipStatus = 0;
    let pirateStatus = 0;

    for(let section of pirate){
        pirateStatus += section;
    }
    for(let section of warship){
        warshipStatus += section;
    }
    console.log(`Pirate ship status: ${pirateStatus}`);
    console.log(`Warship status: ${warshipStatus}`);
}
solve(['2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire']);

