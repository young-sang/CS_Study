class PrinterQueue{
    constructor() {
        this.queue = [];
    }

    addPrintJob(document){
        console.log(`Added to queue: ${document}`);
        this.queue.push(document);
    }

    printNext(){
        if(this.queue.length === 0){
            console.log("No documents to print");
            return;
        }
        console.log(`Printing: ${this.queue.shift()}`);
    }
}
const printer = new PrinterQueue();
printer.addPrintJob("Report.pdf");
printer.addPrintJob("Presentation.pptx");
printer.printNext(); // Printing: Report.pdf
printer.printNext(); // Printing: Presentation.pptx