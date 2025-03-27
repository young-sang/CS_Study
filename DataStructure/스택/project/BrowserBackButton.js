class BrowserHistory{
    constructor(){
        this.backStack = [];
        this.forwardStack = [];
        this.currentPage = null;
    }

    visit(page){
        if(this.currentPage){
            this.backStack.push(this.currentPage);
        }
        this.currentPage = page;
        this.forwardStack = [];
        console.log(`Vusuted: ${page}`);
    }

    back(){
        if(this.backStack.length === 0){
            console.log("No pages to go back to");
            return;
        }
        this.forwardStack.push(this.currentPage);
        this.currentPage = this.backStack.pop();
        console.log(`Back to: ${this.currentPage}`);
    }

    forward(){
        if(this.forwardStack.length === 0){
            console.log("No pages to go forward to.");
            return;
        }
        this.backStack.push(this.currentPage);
        this.currentPage = this.forwardStack.pop();
        console.log(`Forward to: ${this.currentPage}`);
    }       
}

const browser = new BrowserHistory();
browser.visit("google.com");
browser.visit("youtube.com");
browser.visit("github.com");
browser.back();   // Back to: youtube.com
browser.back();   // Back to: google.com
browser.forward(); // Forward to: youtube.com