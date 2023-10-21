function muOnline(arr) {
    let rooms = arr.split('|');
    let hp = 100;
    let coins = 0;

    for (let i = 0; i < rooms.length; i++) {

        let room = rooms[i].split(' ');
        let type = room[0];
        let num = Number(room[1]);

        if (type == 'potion') {
        if(num + hp > 100){
            hp = 100;
        }
         hp += num;
         console.log(`You healed for ${num} hp.`);
         console.log(`Current health: ${hp} hp.`);

        } else if (type == 'chest') {
           coins += num;
           console.log(`You found ${num} bitcoins.`);
        

        } else {
           hp -= num
           if(hp <= 0){
            console.log(`You died! Killed by ${type}.`);
            console.log(`Best room: ${i + 1}`);
            return;
           }else{
            console.log(`You slayed ${type}.`);
           }
        }
    }
console.log("You've made it!");
console.log(`Bitcoins: ${coins}`);
console.log(`Health: ${hp}`);

}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");


