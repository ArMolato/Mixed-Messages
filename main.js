//Our random number generator function.
const ourRandomGen = () => {
    return Math.floor(Math.random() * 3);    
}

//Mixed message generating function.
const mixedMessages = () => {
        //The object that stores message elements and our message generating method.        
        let ourObjMessage = {
        msgNouns : ['Police are', 'Miners are', 'Politicians are', 'Everyone'],
        msgVerbs : ['searching', 'minning', 'lying', 'wants'],
        msgObjects : ['for a suspect', 'for gold', 'to the people', 'to be popular'], 
        getMsg() {
            return `${this.msgNouns[ourRandomGen()]} ${this.msgVerbs[ourRandomGen()]} ${this.msgObjects[ourRandomGen()]}`
        }
    };
    //We are returning the method inside our Object.
    return ourObjMessage.getMsg();
}

//Calling our mixedMessages function.
mixedMessages();
