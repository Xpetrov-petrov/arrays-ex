function friendList(data){
    let frs = data[0].split(", ");
    let blacklistCount = 0;
    let lostCount = 0;

    for(let i = 1; i < data.length; i++){
        if(data[i] == "Report"){
            break;
        }
        let command = data[i].split(" ");
        let action = command[0];
        let prom1 = command[1];
        let prom2 = command[2];

        if(action == "Blacklist"){
            if(frs.includes(prom1)){
                let index = frs.indexOf(prom1);
                frs[index] = "Blacklisted";
                console.log(`${prom1} was blacklisted.`);
                blacklistCount++;
            }else{
                console.log(`${prom1} was not found.`);
            }
        }else if(action == "Error"){
          let index = Number(prom1);
          if(index >= 0 && index < frs.length){
            let oneFr = frs[index];
            if(oneFr != "Blacklisted" && oneFr != "Lost"){
                frs[index] = "Lost";
                console.log(`${oneFr} was lost due to an error.`);
                lostCount++;
            }
          }

        }else if(action == "Change"){
            let index = Number(prom1);
            if(index >= 0 && index < frs.length){
                let oneFr = frs[index];
                frs[index] = prom2
                console.log(`${oneFr} changed his username to ${prom2}.`);
            }
        }
    }
    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(frs.join(" "));
}
friendList(["Mike, John, Eddie, William",

"Blacklist Maya",

"Error 1",

"Change 4 George",

"Report"])

// friendList((["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]))