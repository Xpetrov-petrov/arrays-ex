function softuniReception(arr) {
 let worker1 = Number(arr[0]);
 let worker2 = Number(arr[1]);
 let worker3 = Number(arr[2]);
 let students = Number(arr[3]);
 let neededHours = 0;
 let answerPearHour = worker1 + worker2 + worker3;

 while(students > 0){
    students -= answerPearHour;
    neededHours++;

    if(neededHours % 4 == 0){
        neededHours++;
     }
 }  
    console.log(`Time needed: ${neededHours}h.`);
  }

//softuniReception(['5','6','4','20']);
softuniReception(['1','2','3','45']);
//softuniReception(['3','2','5','40']);