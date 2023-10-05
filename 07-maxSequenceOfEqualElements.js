function maxSequenceOfEqualElements(arr){

    let currentStreak = [arr[0]];
    let longestStreak = [arr[0]];

    for(let i = 1; i < arr.length; i++){
         if(arr[i] == arr[i-1]){
            currentStreak.push(arr[i]);
         }else{
            currentStreak = [arr[i]];
         }

         if(currentStreak.length > longestStreak.length){
            longestStreak = currentStreak;

         }
    }
    console.log(longestStreak.join(" "));
}
//maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3] );
//maxSequenceOfEqualElements([4, 4, 4, 4]);
//maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);