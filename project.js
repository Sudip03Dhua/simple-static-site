const url = require('url');
const http = require('http');
const fs = require('fs');

const port = 1705;

const server = http.createServer((req, res) => {

    //request//
    //index//
    //about//
    //services//
    res.writeHead(200,{'Content-type':'text/html'})
    const path = req.url

    if (path == "/about") {
         
        const fileContent =  fs.readFileSync("./views/about.html")
        res.write(fileContent);
        res.end()
        
        //console.log("about page")

    } else if (path == "/") {

       
        const fileContent =  fs.readFileSync("./views/home.html")
        res.write(fileContent);
        res.end()

        //console.log("home page")
    }
    else if (path == "/services") {
         
        const fileContent =  fs.readFileSync("./views/services.html")
        res.write(fileContent);
        res.end()
        // console.log("services page")
    }


});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
