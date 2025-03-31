class ChatQueue{
    constructor(){
        this.queue = [];
    }

    sendMessage(message){
        console.log(`Message sent: ${message}`);
        this.queue.push(message);
    }

    receiveMessage() {
        if(this.queue.length === 0){
            console.log("No new mwssage");
            return;
        }
        console.log(`New message received: ${this.queue.shift()}`);
    }
}

const chat = new ChatQueue();
chat.sendMessage("Hello!");
chat.sendMessage("How are you?");
chat.receiveMessage(); // New message received: Hello!
chat.receiveMessage(); // New message received: How are you?