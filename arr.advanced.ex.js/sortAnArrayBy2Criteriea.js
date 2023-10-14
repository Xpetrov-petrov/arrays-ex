function sortAnArrayBy2Criteriea(arr){
let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(sortedArr.join('\n'));
}
//sortAnArrayBy2Criteriea(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteriea(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])