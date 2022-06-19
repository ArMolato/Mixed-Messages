//Our random number generators.
let ourRandomValOne = Math.floor(Math.random() * 3);
let ourRandomValTwo = Math.floor(Math.random() * 3);
let ourRandomValThree = Math.floor(Math.random() * 3);

const mixedMessages = () => {
    //The object that contains the strings and methods for our final random message. 
    let ourObjMessage = {
        msgNouns : ['Police are', 'Miners are', 'Politicians are', 'Everyone'],
        msgVerbs : ['searching', 'minning', 'lying', 'wants'],
        msgObjects : ['for a suspect', 'for gold', 'to the people', 'to be popular'], 
        getMsg() {
            return `${this.msgNouns[ourRandomValOne]} ${this.msgVerbs[ourRandomValTwo]} ${this.msgObjects[ourRandomValThree]}`
        }
    };
    //We are returning the method inside our Object.
    return ourObjMessage.getMsg()
}

//Calling the function.
console.log(mixedMessages());