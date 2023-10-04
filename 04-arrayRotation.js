function arrayRotacion(arr, rotacionCount) {

    for (let rotacions = 1; rotacions <= rotacionCount; rotacions++) {
        let firstElement = arr.shift();
        arr.push(firstElement);

    }
    console.log(arr.join(' '));
}
arrayRotacion([51, 47, 32, 61, 21], 2);
//arrayRotacion([32, 21, 61, 1], 4 );
//arrayRotacion([2, 4, 15, 31], 5 );