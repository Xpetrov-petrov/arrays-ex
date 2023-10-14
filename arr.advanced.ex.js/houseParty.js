function houseParty(arr){
 let guests = [];

 for(let command of arr){
    let tokens = command.split(" ");
    let name = tokens[0];
     
    if(tokens.includes('not')){
        if(guests.includes(name)){
          let index = guests.indexOf(name);
          guests.splice(index, 1);
        }else{
            console.log(`${name} is not in the list!`);
        }
    }else{
        if(guests.includes(name)){
            console.log(`${name} is already in the list!`);
        }else{
            guests.push(name);
        }
    }
 }
 console.log(guests.join('\n'));
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);

/* houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);
*/