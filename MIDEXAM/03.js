function chatLonger(input){
    let arrayLength = input.length;
    let resultArr = [];

    for(let i = 0; i < arrayLength; i++){
        let currentCommand = input.shift().split(" ");
        let message = "";
        let currentCommandIndex = 0;
        
        if(currentCommand.includes('Chat')){
            currentCommand.shift();
            message = currentCommand;
            resultArr.push(message.toString());
        }
        if(currentCommand.includes('Edit')){
            currentCommand.shift();
            let messageToBeEdited = currentCommand.shift()
            if(resultArr.includes(messageToBeEdited)){
                currentCommandIndex = resultArr.indexOf(messageToBeEdited);
                let newArr = resultArr.slice();
                newArr.splice(currentCommandIndex, 1, currentCommand.toString());

                resultArr = newArr;
            }
        }
        if(currentCommand.includes('Pin')){
            currentCommand.shift();
            let messageToBePinned = currentCommand.shift().toString();
            if(resultArr.includes(messageToBePinned)){
                currentCommandIndex = resultArr.indexOf(messageToBePinned);
                message = resultArr.splice(currentCommandIndex, 1);
                resultArr.push(message.toString());
            }
        }
        if(currentCommand.includes('Spam')){
            currentCommand.shift();
            message = currentCommand;
            message.map(a => resultArr.push(a));
        }

        if(currentCommand.includes('Delete')){
            currentCommand.shift();
            let messageToDel = currentCommand.toString();
            if(resultArr.includes(messageToDel)){
                let startIndex = resultArr.indexOf(messageToDel);
                resultArr.splice(startIndex, 1);
            }
        }
    }
    console.log(resultArr.join("\n"));
}
chatLonger(["Chat John",

"Spam Let's go to the zoo",

"Edit zoo cinema",

"Chat tonight",

"Pin John",

"end"])