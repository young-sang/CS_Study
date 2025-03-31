class JobScheduler {
    constructor() {
        this.queue = [];
    }

    addJob(job){
        this.queue.push(job);
    }

    processJob(){
        if(this.queue.length === 0){
            console.log("No jobs in the queue");
            return;
        }
        const job = this.queue.shift();
        console.log(`Processing job: ${job}`);
    }

    showJobs(){
        console.log("Pending Jobs:", this.queue);
    }
}

const scheduler = new JobScheduler();
scheduler.addJob("Email Notification");
scheduler.addJob("Data Backup");
scheduler.processJob(); // Processing job: Email Notification
scheduler.showJobs(); // Pending Jobs: [ 'Data Backup' ]