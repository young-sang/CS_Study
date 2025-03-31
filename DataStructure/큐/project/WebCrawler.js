class WebCrawler{
    constructor(){
        this.queue = [];
        this.visited = new Set();
    }

    addURL(url){
        if(!this.visited.has(url)){
            this.queue.push(url);
            this.visited.add(url);
        }
    }

    crawlNext(){
        if(this.queue.length === 0){
            console.log("No more URLs to crawl");
            return;
        }
        const url = this.queue.shift();
        console.log(`Crawling: ${url}`);
        this.addURL(url + "/about");
        this.addURL(url + "/contact");
    }
}


const crawler = new WebCrawler();
crawler.addURL("https://example.com");
crawler.crawlNext(); // Crawling: https://example.com
crawler.crawlNext(); // Crawling: https://example.com/about
