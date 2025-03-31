class NetworkPacketQueue{
    constructor(){
        this.queue = [];
    }

    addPacket(packet){
        console.log(`Packet received: ${packet}`);
        this.queue.push(packet);
    }

    processPacket(){
        if(this.queue.length === 0){
            console.log("No packets to process");
            return;
        }
        console.log(`Processing packet: ${this.queue.shift()}`);
    }
}

const network = new NetworkPacketQueue();
network.addPacket("Packet 1");
network.addPacket("Packet 2");
network.processPacket(); // Processing packet: Packet 1
network.processPacket(); // Processing packet: Packet 2